import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Customer } from '@/_models';

import { CustomerService, AuthenticationService } from '@/_services';

@Component({
     templateUrl: "customerregister.component.html",
     selector: "app-customerregister" 
 })
export class CustomerRegisterComponent implements OnInit {
    customers = new Array<Customer>();
    submitted = false;
    model: any = {};
    customerid: any;
    isedit: boolean = false;

    constructor(
        private customerService: CustomerService,
        private authenticationService: AuthenticationService, 
        private route: ActivatedRoute, 
        private router: Router) { }

    ngOnInit() {
        this.customerid = this.route.snapshot.params["id"];

        if(this.customerid != -1)
        {
            this.isedit = true;
            this.customerService.getCustomer(this.customerid)
                .subscribe(data =>{
                for(const d of (data as any))
                {
                    this.model = {
                        id: d.id,
                        userid: d.userid,
                        firstname: d.firstname,
                        lastname: d.lastname,
                        gender: d.gender,
                        email: d.email,
                        address: d.address,
                        city: d.city,
                        state: d.state
                    };   
                }
            });
        } 
    }

    onSubmit(form: NgForm) {
        this.submitted = true;

        if(!form.valid) {
            return false;
        } else {
            if(form.value.id != undefined){
                this.customerService.updateCustomer(JSON.stringify(form.value), this.model.id)
                .subscribe(response => {
                    this.customers = response.map(item=>
                    {
                        return new Customer(
                            item.id,
                            item.userid,
                            item.firstname,
                            item.lastname,
                            item.gender,
                            item.email,
                            item.address,
                            item.city,
                            item.state
                        );
                    });
                });
            } else {
                form.value.userid = this.authenticationService.currentUserValue.id;
                this.customerService.addCustomer(JSON.stringify(form.value))
                .subscribe(response => {
                    this.customers = response.map(item=>
                    {
                        return new Customer(
                            item.id,
                            item.userid,
                            item.firstname,
                            item.lastname,
                            item.gender,
                            item.email,
                            item.address,
                            item.city,
                            item.state
                        );
                    });
                });
            }
        }
        this.router.navigate(["./customer"]);
    }

    backtoPrevScreen()
    {
        this.router.navigate(["./customer"])
    }

}


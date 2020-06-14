import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '@/_models';

import { CustomerService, AuthenticationService } from '@/_services';

@Component({
     templateUrl: "customerinfo.component.html",
     selector: "app-customerinfo",
     styles: [`
    button.active {color: green;} 
    div.view_content {margin-left:5%;}
`]})

export class CustomerInfoComponent implements OnInit {
    customers = new Array<Customer>();
    model: any = {};
    customerid: any;
    displayMode: number = 1;

    constructor(
        private customerService: CustomerService,
        private authenticationService: AuthenticationService, 
        private route: ActivatedRoute, 
        private router: Router) { }

    ngOnInit() {
        this.customerid = this.route.snapshot.params["id"];
        this.displayMode = +this.route.snapshot.params["mode"];

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

    onDisplayModeChange(mode: number): void {
        this.displayMode = mode;
    }

    editCustomer(): void {
        this.router.navigate(["./customerregister/" + this.customerid]);
    }
}


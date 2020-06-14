import { Component, OnInit } from '@angular/core';
import { CustomerService, AuthenticationService } from '@/_services';
import { Customer } from '@/_models';

@Component({ 
  selector: 'app-customerlistview',
  templateUrl: 'customerlistview.component.html'
})

export class CustomerListViewComponent implements OnInit {
  customers = new Array<Customer>();
  userrole: string;
  userid: number;

  constructor(private customerService: CustomerService, 
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userrole = this.authenticationService.currentUserValue.role;
    this.userid = this.authenticationService.currentUserValue.id;

    this.customerService.getAllCustomers(this.userid)
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







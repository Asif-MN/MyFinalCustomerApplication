import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '@/_services';
import { Customer } from '@/_models';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-customercardview',
  templateUrl: 'customercardview.component.html',
  styles: [`
  a.header-name:hover {color: #007bff;}
  a.fa-edit:hover {text-decoration: none;}
`]})

export class CustomerCardViewComponent implements OnInit {
  customers = new Array<Customer>();
  @Input() urole: string;
  @Input('uid') uid: number;
  cpage: number = 1;

  constructor(private customerService: CustomerService, 
              private router: Router) { }

  ngOnInit(): void {
    
    this.customerService.getAllCustomers(this.uid)
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

  searchChange(): void {
    this.cpage = 1;
  }

  viewCustomerInfo(custid, mode): void {
    this.router.navigate(['customerinfo', custid, mode]);
  }
}







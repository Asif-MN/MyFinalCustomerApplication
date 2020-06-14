import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@/_services';

@Component({ 
  templateUrl: 'customer.component.html',
  styles: [`
    button.active {color: green;} 
    div.view_content {margin-left:5%;}
`]})

export class CustomerComponent implements OnInit {
  displayMode: number = 1;
  userrole: string;
  userid: number;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userrole = this.authenticationService.currentUserValue.role;
    this.userid = this.authenticationService.currentUserValue.id;
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  addCustomer(): void {
    this.router.navigate(["./customerregister/-1"]);
  }
}

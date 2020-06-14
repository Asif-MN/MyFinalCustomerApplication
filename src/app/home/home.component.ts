import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ 
    templateUrl: 'home.component.html', 
    styles: [`
        td,th {width: 180px;} 
        td.first-col,th.first-col {width: 50px;} 
`]})

export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        //alert(this.currentUser.role);
        if(this.currentUser.role == 'Admin')
            this.router.navigate(['/']);
        else
            this.router.navigate(['/customer']);
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}
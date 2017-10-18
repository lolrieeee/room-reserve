import { Component,OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'gw-login',
    templateUrl: './login.html',
    styleUrls: ['login.css']
})

export class LoginComponent {

    constructor(private loginService:LoginService,private router:Router, private myRoute: ActivatedRoute){}

    public login() {
        this.loginService.login();

        this.router.navigate(['dashboard']);
    }

    public logout() {
        this.loginService.logout();

        if ( !this.router.url.includes('/about') ) {
            this.router.navigate(['landing']);
        }
    }

    get username() {
        return this.loginService.getLoggedInUser();
    }
}

import { Component } from '@angular/core';
import { LoginService } from './../services/login.service'

@Component({
    selector: 'gw-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.css']
})

export class LandingComponent {
    constructor(private loginService:LoginService){}

    public login() {
        this.loginService.login();
    }

    public logout() {
        this.loginService.logout();
    }

    get username() {
        return this.loginService.getLoggedInUser();
    }
}

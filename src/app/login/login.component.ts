import { Component } from '@angular/core';
import { LoginService } from './../services/login.service'

@Component({
    selector: 'gw-login',
    templateUrl: './login.html',
    styleUrls: ['login.css']
})

export class LoginComponent {

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

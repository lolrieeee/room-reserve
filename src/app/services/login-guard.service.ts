import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()

export class LoginGuardService implements CanActivate {
    constructor(private _loginService:LoginService, private router:Router){
    }

    canActivate() {
        const user = this._loginService.getLoggedInUser();
        if( user === null) {
            this.router.navigate(['landing'], {fragment:'show-warning'} );
            return false;
        }
        return true;
    }
}

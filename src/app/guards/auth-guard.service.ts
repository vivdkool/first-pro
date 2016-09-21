import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "../core/login.service";


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private loginService:LoginService,private router:Router) { }

  canActivate(){
    console.log(' authentication guard service called');
    if(this.loginService.isLoggedin()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}

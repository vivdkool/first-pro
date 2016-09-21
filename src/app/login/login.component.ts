import { Component, OnInit } from '@angular/core';
import {LoginService} from "../core/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private email:string='';
  private password:string='';
  private loginData:any;
  private errorMessage:string;
  constructor(private loginService:LoginService, private router:Router) {}

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.login(this.email,this.password).
    subscribe(values=>{this.loginData=values; localStorage.setItem('loginInfo',JSON.stringify(this.loginData)); this.router.navigate(['home'])},
      error=>this.errorMessage=<any>error);
  }

}

import { Component, OnInit } from '@angular/core';
import {LoginService} from "../core/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  views:Object=[
    {
      name:"Home",
      description:"Home or you can say landing page",
      icon:"Home",
      navigate:"home"
    },
    {
      name:"Demo",
      description:"Experimental 1",
      icon:"demo",
      navigate:"demo"
    }
  ]

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {

  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http, Response} from '@angular/http';

@Injectable()
export class LoginService {
  loggedin:boolean;
  constructor(private http:Http) { };

  login(userEmail:string,userPassword:string): Observable<any>{

    return this.http.get("http://localhost:3001/users?email="+userEmail+"&password="+userPassword)
      .map(this.extractData);
  }

  extractData(res: Response){
    return res.json();

  }

  isLoggedin(){
    let loginInfo:string;
    loginInfo=localStorage.getItem('loginInfo');
    console.log(loginInfo);
    if(loginInfo!==null&&typeof loginInfo!=='undefined')
      this.loggedin=true;
    else
      this.loggedin=false;
    return this.loggedin;
  }

  logOut(){
    localStorage.clear();
    this.loggedin=false;
  }

}

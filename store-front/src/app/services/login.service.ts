import { Injectable } from '@angular/core';
import {AppConst} from "app/constants/app-const";
import {Observable} from "rxjs/Observable";
import {Http,Headers} from "@angular/http";
import {Router} from "@angular/router";

// @Injectable()
// export class LoginService {
//   private serverPath:string=AppConst.serverPath;
//
//   constructor(
//     private http:Http,
//     private router:Router
//   ) { }
//
// //  SendCredential Functionality
//   sendCredential(username:string,password:string) {
//     let url = this.serverPath + "/token";
//     let encodedCredentials = btoa(username + ":" + password);
//     let basicHeader = "Basic " + encodedCredentials;
//     let headers = new Headers({
//       'Content-Type ': 'application/x-www-form-urlencoded',
//       'Authorization': basicHeader
//     });
//
//     return this.http.get(url, {headers: headers});
//   }
//
// //  Check Session
//   checkSession(){
//     let url = this.serverPath+"/checkSession";
//     let headers = new Headers({
//       'x-auth-token': localStorage.getItem('xAuthToken')
//     });
//
//     return this.http.get(url, {headers: headers});
//   }
//
//   //Log Out
//   logout(){
//     let url = this.serverPath + "/user/logout";
//     let headers = new Headers({
//       'x-auth-token': localStorage.getItem('xAuthToken')
//     });
//
//     return this.http.post(url, '',{headers: headers});
//   }
//   }

@Injectable()
export class LoginService {
  private serverPath:string = AppConst.serverPath;

  constructor (private http: Http, private router:Router) {}

  sendCredential(username: string, password: string) {
    let url = this.serverPath+"/token";
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+ encodedCredentials;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : basicHeader

        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    let url = this.serverPath+"/checkSession";
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }

  logout() {
    let url = this.serverPath+"/user/logout";
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url,'', {headers : tokenHeader});
  }

}


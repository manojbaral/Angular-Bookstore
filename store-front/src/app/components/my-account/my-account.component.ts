// import { Component, OnInit } from '@angular/core';
// import {AppConst} from "app/constants/app-const";
// import {LoginService} from "app/services/login.service";
// import {UserService} from "app/services/user.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-my-account',
//   templateUrl: './my-account.component.html',
//   styleUrls: ['./my-account.component.css']
// })
// export class MyAccountComponent implements OnInit {
//
//   //Variables used for Login Credential
//   private serverPath=AppConst.serverPath;
//   private loginError:boolean=false;
//   private loggedIn=false;
//   private credential={
//     'username':'',
//     'password':''
//   };
//
//   //Email Functionality
//   private emailSent: boolean=false;
//   private usernameExists:boolean;
//   private emailExists:boolean;
//   private username:string;
//   private email:string;
//
//   //Forget Password Functionality
//   private emailNotExists:boolean=false;
//   private forgetPasswordEmailSent:boolean;
//   private recoverEmail:string;
//
//   constructor(
//     private loginService: LoginService,
//     private userService: UserService,
//     private router: Router
//   ) { }
//
//   onLogin(){
//     this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
//
//       res => {
//         console.log(res);
//         localStorage.setItem("xAuthToken",res.json().token);
//         this.loggedIn=true;
//         location.reload();
//         this.router.navigate(['/home']);
//
//       },
//       error => {
//         this.loggedIn=false;
//         this.loginError=true;
//
//       }
//     );
//   }
//
//   //New Account Functionality
//   onNewAccount(){
//     this.usernameExists=false;
//     this.emailExists=false;
//     this.emailSent=false;
//
//     this.userService.newUser(this.username,this.email).subscribe(
//       res =>{
//         console.log(res);
//         this.emailSent=true;
//
//       },
//       error =>{
//         console.log(error.text());
//         let errorMessage=error.text();
//
//         //If condition to make error message validate
//         if (errorMessage==="usernameExists") this.usernameExists=true;
//         if (errorMessage==="emailExists") this.emailExists=true;
//
//
//       }
//     )
//   }
//
//   //Functionality for foeget password
//   onForgetPassword() {
//     this.forgetPasswordEmailSent = false;
//     this.emailNotExists = false;
//
//     this.userService.retrievePassword(this.recoverEmail).subscribe(
//       res => {
//         console.log(res);
//         this.forgetPasswordEmailSent = true;
//       },
//       error => {
//         console.log(error.text());
//         let errorMessage = error.text();
//         if(errorMessage==="Email not found") this.emailNotExists=true;
//       }
//     );
//   }
//
//   ngOnInit() {
//     this.loginService.checkSession().subscribe(
//       res =>{
//         this.loggedIn=true;
//       },
//       error =>{
//         this.loggedIn=false;
//       }
//     )
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent:boolean = false;
  private usernameExists:boolean = false;
  private emailExists:boolean = false;
  private username:string;
  private email:string;

  private emailNotExists: boolean = false;
  private forgetPasswordEmailSent: boolean = false;
  private recoverEmail:string;

  constructor (private loginService: LoginService, private userService: UserService, private router: Router){
  }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        this.loggedIn=true;
        location.reload();
        this.router.navigate(['/home']);
      },
      error=>{
        this.loggedIn=false;
        this.loginError=true;
      }
    );
  }

  onNewAccount() {
    this.usernameExists=false;
    this.emailExists=false;
    this.emailSent = false;

    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage=error.text();
        if (errorMessage==="usernameExists") this.usernameExists=true;
        if (errorMessage==="emailExists") this.emailExists=true;
      }
    );
  }

  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage=error.text();
        if (errorMessage==="usernameExists") this.usernameExists=true;
        if (errorMessage==="emailExists") this.emailExists=true;
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn=true;
      },
      error => {
        this.loggedIn=false;
      }
    );
  }

}

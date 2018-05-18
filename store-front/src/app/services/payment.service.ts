import { Injectable } from '@angular/core';
import {AppConst} from "app/constants/app-const";
import {Http, Headers} from "@angular/http";
import {UserPayment} from "app/models/user-payment";
import {Router} from "@angular/router";

@Injectable()
export class PaymentService {
  private serverPath: string=AppConst.serverPath;

  constructor(
    private http:Http,
    private router:Router
  ) { }

//  New Payment Functionality
  newPayment(payment: UserPayment){
    let url = this.serverPath+"/payment/add";
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(payment),{headers : tokenHeader});
  }

//  User Payment List
  getUserPaymentList(){
    let url = this.serverPath+"/payment/getUserPaymentList";
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url,{headers : tokenHeader});
  }

//  Remove Payment
  removePayment(id:number){
    let url = this.serverPath+"/payment/remove";
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id,{headers : tokenHeader});
  }

//  Set Default Payment
  setDefaultPayment(id:number){
  let url = this.serverPath+"/payment/setDefault";
  let tokenHeader = new Headers ({
    'Content-Type' :'application/json',
    'x-auth-token' : localStorage.getItem("xAuthToken")
  });
  return this.http.post(url,id,{headers : tokenHeader});
}


}

import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {AppConst} from "app/constants/app-const";
import {ShippingAddress} from "app/models/shipping-address";
import {BillingAddress} from "app/models/billing-address";
import {Payment} from "app/models/payment";


@Injectable()
export class CheckoutService {

  constructor(private http:Http) { }

  //Checkout the book
  checkout(
    shippingAddress: ShippingAddress,
    billingAddress: BillingAddress,
    payment: Payment,
    shippingMethod: string
  ){

      let url = AppConst.serverPath+"/checkout/checkout";

      //Creat an Order Object
    let  order={
      "shippingAddress" : shippingAddress,
      "billingAddress" : billingAddress,
      "payment" : payment,
      "shippingMethod" : shippingMethod
    }
      let tokenHeader = new Headers ({
        'Content-Type' :'application/json',
        'x-auth-token' : localStorage.getItem("xAuthToken")
      });
      return this.http.post(url, order, {headers : tokenHeader});
    }

    //get user order
  getUserOrder(){
      let url = AppConst.serverPath+"/checkout/getUserOrder";
      let tokenHeader = new Headers ({
        'Content-Type' :'application/json',
        'x-auth-token' : localStorage.getItem("xAuthToken")
      });
      return this.http.get(url,{headers : tokenHeader});
    }
  }




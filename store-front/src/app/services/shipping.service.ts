import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {AppConst} from "app/constants/app-const";
import {UserShipping} from "app/models/user-shipping";

@Injectable()
export class ShippingService {

  private serverPath:string = AppConst.serverPath;

  constructor(private http:Http) { }

  //New Shipping
  newShipping(shipping: UserShipping) {
    let url = this.serverPath+"/shipping/add";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(shipping), {headers : tokenHeader});
  }

  // User-Shipping-List
  getUserShippingList() {
    let url = this.serverPath+"/shipping/getUserShippingList";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }

  // Remove Shipping Functionality
  removeShipping(id: number) {
    let url = this.serverPath+"/shipping/remove";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id, {headers : tokenHeader});
  }

  //Default Shipping
  setDefaultShipping(id: number) {
    let url = this.serverPath+"/shipping/setDefault";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, id, {headers : tokenHeader});
  }
}

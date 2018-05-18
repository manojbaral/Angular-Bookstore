import { Component, OnInit } from '@angular/core';
import {AppConst} from "app/constants/app-const";
import {User} from "app/models/user";
import {LoginService} from "app/services/login.service";
import {UserService} from "app/services/user.service";
import {Router} from "@angular/router";
import {UserPayment} from "app/models/user-payment";
import {PaymentService} from "app/services/payment.service";
import {UserBilling} from "app/models/user-billing";
import {UserShipping} from "app/models/user-shipping";
import {ShippingService} from "app/services/shipping.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private dataFetched = false;
  private loginError: boolean;
  private loggedIn: boolean;
  private credential = {
    'username': '',
    'password': ''
  };

  // Creating New user
  private user: User = new User();
  private updateSuccess: boolean;
  private newPassword: string;
  private incorrectPassword: boolean;
  private currentPassword: string;

  private selectedProfileTab: number = 0;
  private selectedBillingTab: number = 0;
  private selectedShippingTab : number=0;

  // Payment
  private userPayment: UserPayment = new UserPayment();

  //Billing
  private userBilling: UserBilling = new UserBilling();
  private userPaymentList: UserPayment[] = [];
  private defaultPaymentSet: boolean;
  private defaultUserPaymentId: number;
  private stateList: string[]=[];

  //Shipping
  private userShipping: UserShipping=new UserShipping();
  private userShippingList: UserShipping[]=[];

  private defaultUserShippingId: number;
  private defaultShippingSet: boolean;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private paymentService: PaymentService,
              private shippingService: ShippingService,
              private router: Router) {
  }

  selectedShippingChange(val: number) {
    this.selectedShippingTab = val;
  }

  selectedBillingChange(val: number) {
    this.selectedBillingTab = val;
  }

  // Update User Info
  onUpdateUserInfo() {
    this.userService.updateUserInfo(
      this.user,
      this.newPassword,
      this.currentPassword).subscribe(
      res => {
        console.log(res.text());
        this.updateSuccess = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if (errorMessage === "Incorrect Current Password") this.incorrectPassword = true;
      }
    );
  }


//  New Payment Method
  onNewPayment() {
    this.paymentService.newPayment(this.userPayment).subscribe(
      res => {
        this.getCurrentUser();
        this.selectedBillingTab = 0;
        this.userPayment= new UserPayment();
      },
      error => {
        console.log(error.text())
      }
    )
  }

//  Update Payment
  onUpdatePayment(payment: UserPayment) {
    this.userPayment = payment;
    this.userBilling = payment.userBilling;
    this.selectedBillingTab = 1;
  }

//  Remove Payment
  onRemovePayment(id: number) {
    this.paymentService.removePayment(id).subscribe(
      res => {
        this.getCurrentUser();
      },
      error => {
        console.log(error.text())
      }
    );

  }

//  Default Payment
  setDefaultPayment(){
    this.defaultPaymentSet=false;
    this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultPaymentSet=true;
      },
      error => {
        console.log(error.text())
      }
    );
  }

  // New-Shipping
  onNewShipping () {
    this.shippingService.newShipping(this.userShipping).subscribe(
      res => {
        this.getCurrentUser();
        this.selectedShippingTab = 0;
        this.userShipping=new UserShipping();
      },
      error => {
        console.log(error.text());
      }
    );
  }

  //Update-Shipping
  onUpdateShipping(shipping:UserShipping) {
    this.userShipping = shipping;
    this.selectedShippingTab=1;
  }

  //Remove-Shipping
  onRemoveShipping(id:number) {
    this.shippingService.removeShipping(id).subscribe(
      res => {
        this.getCurrentUser();

      },
      error => {
        console.log(error.text());
      }
    );
  }

  //Default Shipping
  setDefaultShipping() {
    this.defaultShippingSet=false;
    this.shippingService.setDefaultShipping(this.defaultUserShippingId).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultShippingSet=true;
        // this.selectedProfileTab = 2;
        // this.selectedBillingTab = 0;
      },
      error => {
        console.log(error.text());
      }
    );
  }

  //Current User
  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
        this.userPaymentList=this.user.userPaymentList;
        this.userShippingList = this.user.userShippingList;

        //Set Default Payment
        for (let index in this.userPaymentList){
          if (this.userPaymentList[index].defaultPayment){
            this.defaultUserPaymentId=this.userPaymentList[index].id;
            break;
          }
        }

        //Check for Default Shipping Address
        for (let index in this.userShippingList){
          if (this.userShippingList[index].userShippingDefault){
            this.defaultUserShippingId=this.userShippingList[index].id;
            break;
          }
        }

        this.dataFetched = true;
      },

      err => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
        console.log("inactive session");
        this.router.navigate(['/myAccount']);
      }
    );

    this.getCurrentUser();

    // State List
    for (let s in AppConst.usStates){
      this.stateList.push(s);
    }

    this.userBilling.userBillingState="";
    this.userPayment.type="";
    this.userPayment.expiryMonth="";
    this.userPayment.expiryYear="";
    this.userPayment.userBilling = this.userBilling;
    this.defaultPaymentSet=false;

    this.userShipping.userShippingState="";
    this.defaultShippingSet=false;
  }
}

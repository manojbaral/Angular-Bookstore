import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
//import {MaterialModule, MdToolbarModule, MdCheckboxModule, MdButtonModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component';
import {routing} from "app/app.routing";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import {LoginService} from "app/services/login.service";
import {UserService} from "app/services/user.service";
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import {PaymentService} from "app/services/payment.service";
import {ShippingService} from "app/services/shipping.service";
import { BookListComponent } from './components/book-list/book-list.component';
import {BookService} from "app/services/book.service";
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe } from './components/book-list/data-filter.pipe';

import {
  MdButtonModule, MdCheckboxModule,
  MdGridListModule,
  MdInputModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdToolbarModule,
  MdTabsModule
} from "@angular/material";
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import {CdkTableModule} from "@angular/cdk/table";
import {OverlayModule} from "@angular/cdk/overlay";
import {CommonModule} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NoopAnimationPlayer} from "@angular/animations";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {CartService} from "app/services/cart.service";
import { OrderComponent } from './components/order/order.component';
import {OrderService} from "app/services/order.service";
import {CheckoutService} from "app/services/checkout.service";
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FaqComponent } from './components/faq/faq.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { HoursComponent } from './components/hours/hours.component';


@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    BookListComponent,
    BookDetailComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent,
    FaqComponent,
    BestSellerComponent,
    HoursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdInputModule,
    MdGridListModule,
    MdSliderModule,
    MdSlideToggleModule,
    BrowserAnimationsModule,
    MdTabsModule,
   // NoopAnimationPlayer,
    MdSelectModule,
    routing,
    DataTableModule
   // CommonModule,
    //CdkTableModule,
    //OverlayModule,

  ],

  providers: [
    LoginService,
    UserService,
    PaymentService,
    ShippingService,
    BookService,
    CartService,
    OrderService,
    CheckoutService
    //{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
  ],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }


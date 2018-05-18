import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "app/components/home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {MyAccountComponent} from "app/components/my-account/my-account.component";
import {MyProfileComponent} from "app/components/my-profile/my-profile.component";
import {BookListComponent} from "app/components/book-list/book-list.component";
import {BookDetailComponent} from "app/components/book-detail/book-detail.component";
import {ShoppingCartComponent} from "app/components/shopping-cart/shopping-cart.component";
import {OrderComponent} from "app/components/order/order.component";
import {OrderSummaryComponent} from "app/components/order-summary/order-summary.component";
import {HoursComponent} from "app/components/hours/hours.component";
import {FaqComponent} from "app/components/faq/faq.component";
/**
 * Created by Manoj Baral on 5/5/2017.
 */

const appRoutes:Routes=[
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  //Home Component
  {
    path: 'home',
    component: HomeComponent
  },

//  My Account Component
  {
    path: 'myAccount',
    component: MyAccountComponent
  },

//  My Profile Component
  {
    path: 'myProfile',
    component:MyProfileComponent
  },

//  Book List Component
  {
    path: 'bookList',
    component: BookListComponent
  },

//  Book Detail Component
  {
    path: 'bookDetail/:id',
    component: BookDetailComponent
  },

  //  ShoppingCart Component
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent
  },

  //Order Component
  {
    path: 'checkout',
    //path: 'order',
    component: OrderComponent
  },

  //Order Summary
  {
    path: 'orderSummary',
    component: OrderSummaryComponent
  },

  //Hours Component
  {
    path: 'hours',
    component: HoursComponent
  },

  //Frequently Asked Question
  {
    path: 'faq',
    component: FaqComponent
  }


];

export const routing: ModuleWithProviders=RouterModule.forRoot((appRoutes));

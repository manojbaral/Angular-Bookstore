import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "app/components/login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AddNewBookComponent} from "app/components/add-new-book/add-new-book.component";
import {BookListComponent} from "app/components/book-list/book-list.component";
import {ViewBookComponent} from "app/components/view-book/view-book.component";
import {EditBookComponent} from "app/components/edit-book/edit-book.component";

/**
 * Created by Manoj Baral on 4/27/2017.
 */

const appRoutes:Routes=[
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  //Login Component
  {
    path: 'login',
    component:LoginComponent
  },

  //Add New Book Component
  {
    path: 'addNewBook',
    component:AddNewBookComponent
  },

  //Book List Component
  {
    path: 'bookList',
    component:BookListComponent
  },

  //View Book
  {
    path: 'viewBook/:id',
    component:ViewBookComponent
  },

  //Edit Book
  {
    path: 'editBook/:id',
    component:EditBookComponent
  }

];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);

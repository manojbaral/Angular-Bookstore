import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdCheckboxModule, MdButtonModule, MdToolbarModule, MaterialModule} from "@angular/material";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "app/services/login.service";
//import {routing} from "app/app.routing";
import { routing } from './app.routing';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {AddBookService} from "app/services/add-book.service";
import {UploadImageService} from "app/services/upload-image.service";
import {BookListComponent, DialogResultExampleDialog} from './components/book-list/book-list.component';
import {GetBookListService} from "app/services/get-book-list.service";
import { ViewBookComponent } from './components/view-book/view-book.component';
import {GetBookService} from "app/services/get-book.service";
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from "app/services/edit-book.service";
import {RemoveBookService} from "app/services/remove-book.service";

@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    [MdButtonModule, MdCheckboxModule,MdToolbarModule],
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent,DialogResultExampleDialog]
})
export class AppModule { }

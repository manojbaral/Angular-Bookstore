import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {AppConst} from "app/constants/app-const";

@Injectable()
export class BookService {
  private serverPath: string=AppConst.serverPath;


  constructor(private http:Http) { }

//  Book List
  getBookList(){
    let url = AppConst.serverPath+"/book/bookList";
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url,{headers : tokenHeader});
  }

  // Get Specific Book
  getBook(id: number){
    let url = AppConst.serverPath+"/book/"+id;
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url,{headers : tokenHeader});

  }

  //Search Book
  searchBook(keyword: string){
    let url = AppConst.serverPath+"/book/searchBook";
    let tokenHeader = new Headers ({
      'Content-Type' :'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url,keyword, {headers : tokenHeader});
  }
  }


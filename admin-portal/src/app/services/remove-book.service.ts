import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Book} from "app/models/book";

@Injectable()
export class RemoveBookService {

  constructor(private http:Http) { }

  //Remove Book
  sendBook(bookId:number) {
    let url = "http://localhost:8181/book/remove";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, bookId, {headers: headers});
  }
}

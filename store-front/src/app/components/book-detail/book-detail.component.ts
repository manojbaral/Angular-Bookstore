import { Component, OnInit } from '@angular/core';
import {Book} from "app/models/book";
import {AppConst} from "app/constants/app-const";
import {BookService} from "app/services/book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {CartService} from "app/services/cart.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private bookId: number;
  private book:Book=new Book();
  private serverPath=AppConst.serverPath;
  private numberList:number[]=[1,2,3,4,5,6,7,8,9];
  private qty:number;

  private addBookSuccess:boolean=false;
  private notEnoughStock:boolean=false;


  constructor(
    private bookService:BookService,
    private cartService: CartService,
    private router:Router,
    private http:Http,
    private route:ActivatedRoute
  ) { }

  //ADD TO CART
  onAddToCart(){
    this.cartService.addItem(this.bookId,this.qty).subscribe(
      res => {
        console.log(res.text());
        this.addBookSuccess=true;
      },
      err => {
        console.log(err.text());
        this.notEnoughStock=true;
      }
    )
  }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.bookId=Number.parseInt(params['id']);
    });

    this.bookService.getBook(this.bookId).subscribe(
      res=>{
      this.book=res.json();
      },
      error=>{
console.log(error);
      }
    )

    this.qty=1;
  }

}

import { Component, OnInit } from '@angular/core';
import {GetBookService} from "app/services/get-book.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Book} from "app/models/book";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  private book:Book = new Book();
  private bookId: number;

  constructor(private getBookService:GetBookService,
              private route:ActivatedRoute, private router:Router) { }

  onSelect(book:Book) {
    this.router.navigate(['/editBook', this.book.id])
    // .then(s => location.reload())
    ;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res.json();
      },
      error => {
        console.log(error);
      }
    );


  }

}

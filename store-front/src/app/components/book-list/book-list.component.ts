import {Component, OnInit} from '@angular/core';
import {Book} from "app/models/book";
import {AppConst} from "app/constants/app-const";
import {BookService} from "app/services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //Declatative Method
  public filterQuery = "";
  public rowsOnPage = 5;

  //Book Functionality
  private selectedBook: Book;
  private bookList: Book[];
  private serverPath = AppConst.serverPath;

  constructor(private bookService: BookService,
              private router: Router,
              private http: Http,
              private route: ActivatedRoute) {
  }

  //View Book
  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/bookDetail', this.selectedBook.id]);
  }


  ngOnInit() {

    //  Filter BookList
    this.route.queryParams.subscribe(params => {
      if (params['bookList']) {
        console.log("filtered book list");
        this.bookList = JSON.parse(params['booklist']);
      } else {
        this.bookService.getBookList().subscribe(
          res => {
            console.log(res.json());
            this.bookList = res.json();
          },
          err => {
            console.log(err);
          }
        )
      }
    })
  }

}

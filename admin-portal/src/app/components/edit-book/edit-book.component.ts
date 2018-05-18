import { Component, OnInit } from '@angular/core';
import {UploadImageService} from "app/services/upload-image.service";
import {GetBookService} from "app/services/get-book.service";
import {EditBookService} from "app/services/edit-book.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Book} from "app/models/book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private bookUpdated: boolean;

  constructor(
    private uploadImageService: UploadImageService,
    private editBookService: EditBookService,
    private getBookService: GetBookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    this.editBookService.sendBook(this.book).subscribe(
      data => {
        this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
        this.bookUpdated=true;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res.json();
      },
      error => console.log(error)
    )
  }

}

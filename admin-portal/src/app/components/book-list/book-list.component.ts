import { Component, OnInit } from '@angular/core';
import {Book} from "app/models/book";
import {GetBookListService} from "app/services/get-book-list.service";
import {Router} from "@angular/router";
import {MdDialog, MdDialogRef} from "@angular/material";
import {RemoveBookService} from "app/services/remove-book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private selectedBook: Book;
  private checked:boolean;
  private bookList:Book[];
  private allChecked: boolean;
  private removeBookList: Book[]=new Array();

  constructor(
    private getBookListService:GetBookListService,
    private removeBookService:RemoveBookService,
    private router:Router,
    public dialog:MdDialog
  ) { }

  //View Book
  onSelect(book:Book){
    this.selectedBook=book;
    this.router.navigate(['/viewBook',this.selectedBook.id]);
  }

  //Dialog delete book
  openDialog(book:Book){
    let dialogRef=this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result=>{
        console.log(result);
        if (result=="yes"){
          this.removeBookService.sendBook(book.id).subscribe(
            res=>{
              console.log(res);
              this.getBookListService.getBookList().subscribe(
                res=>{
                  console.log(res);
                  this.bookList=res.json();
                },
                err=>{
                  console.log(err);
                }
              )
            },
            err=>{
              console.log(err);
            }
          )
        }
      }
    )

  }

  //Remove Book List
  updateRemoveBookList(checked:boolean,book:Book){
    if (checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book),1);
    }
  }

  //Update Book
  updateSelected(checked:boolean){
    if (checked) {
      this.allChecked = true;
      this.removeBookList = this.bookList.slice();
    } else {
      this.allChecked=false;
      this.removeBookList=[];
    }
  }

  //Remove Selected Book
  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);

        if (result == "yes") {
          for (let book of this.removeBookList) {
            this.removeBookService.sendBook(book.id).subscribe(
              res => {

              },
              err => {

              }
            );
          }
          location.reload();

        }
      }
    );
  }

  getBookList(){
    this.getBookListService.getBookList().subscribe(
      res=>{
        console.log(res.json());
        this.bookList=res.json();
      },
      error=>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getBookList();

  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})

export class DialogResultExampleDialog{
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}

}






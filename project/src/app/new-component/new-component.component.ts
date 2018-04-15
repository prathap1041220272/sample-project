import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

import * as _ from 'underscore';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

 public books;
   private allItems: any[];
   pager: any = {};
   pagedItems: any[];
  constructor(private booksDetails:BooksDataService) {
     this.getAllBooks();
     this.books = [];
   }


   getAllBooks(){
   	this.booksDetails.getBooksDetail()
   		.then(data => {
         console.log(data);
   			this.books = data;
   		})
   		.catch(error => {
   			console.log(error);
   		})
   }

  ngOnInit() {
  }

}

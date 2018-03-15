import { Component, OnInit } from '@angular/core';
import {BookBinderService} from "../shared/services/book-binder.service";
import {RestService} from "../shared/services/rest.service";
import {BookData} from "../shared/models";

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  books: BookData[] = [];

  constructor(private bookBinderService: BookBinderService, restService: RestService) {
    restService.getBooks().subscribe((books: BookData[]) => {
      this.bookBinderService.addBooks(...books);
      this.books = bookBinderService.getBooks();
    })
  }

  ngOnInit() {
  }

}

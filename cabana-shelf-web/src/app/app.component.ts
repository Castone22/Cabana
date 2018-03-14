import { Component } from '@angular/core';

import { BookBinderService } from "./shared/services/book-binder.service";
import { BookData } from './shared/models';
import { RestService } from "./shared/services/rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cabana Shelf';
  books: BookData[] = null;

  constructor(private bookBinderService: BookBinderService, restService: RestService) {
    restService.getBooks().subscribe((books: BookData[]) => {
      this.bookBinderService.addBooks(...books);
      this.books = bookBinderService.getBooks();
    })
  }


}

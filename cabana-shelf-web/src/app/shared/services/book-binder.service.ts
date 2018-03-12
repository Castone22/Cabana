import { Injectable } from '@angular/core';
import { BookData } from '../models'

@Injectable()
export class BookBinderService {
  private books: BookData[] = [];

  constructor() { }

  getBooks() { return this.books }
  addBook(book: BookData) {this.books.push(book)}

  addBooks(...args: BookData[]) {
    args.forEach(book => {
      this.addBook(book)
    })
  }
}

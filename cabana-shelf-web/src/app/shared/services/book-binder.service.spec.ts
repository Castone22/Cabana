import { TestBed, inject } from '@angular/core/testing';

import { BookData } from '../models';
import { BookBinderService } from './book-binder.service';

describe('BookBinderService', () => {
  const bookFixtures: Array<BookData> = [
    {
      title: 'Hello World',
      description: 'Computer says hello.',
      read: false,
      pagesRead: 22
    },
    {
      title: 'Ruby Rox: A shiny language',
      read: true,
      pagesRead: 256,
      notes: ['Ruby is a dynamic language', 'Modules are like a building block for a class.']
    }
  ];
  let service: BookBinderService;
  beforeEach(() => {
    service = new BookBinderService();
  });
  it('should yield an empty array given no books were bound', () => {
    expect(service.getBooks()).toEqual([]);
  });
  it('should give back a book that was added', () => {
    service.addBook(bookFixtures[0]);
    expect(service.getBooks()).toEqual([bookFixtures[0]]);
  });
  it('should contain both books if we add both of them',()=>{
    service.addBook(bookFixtures[0]);
    service.addBook(bookFixtures[1]);
    expect(service.getBooks()).toEqual([bookFixtures[0], bookFixtures[1]]);
  });
  it('add books can add multiple books',()=>{
    service.addBooks(bookFixtures[0], bookFixtures[1]);
    expect(service.getBooks()).toEqual([bookFixtures[0], bookFixtures[1]]);
  });
  it('add books can take any number of arguments and books are not unique',()=>{
    service.addBooks(bookFixtures[0], bookFixtures[1], bookFixtures[1]);
    expect(service.getBooks()).toEqual([bookFixtures[0], bookFixtures[1], bookFixtures[1]]);
  });

});

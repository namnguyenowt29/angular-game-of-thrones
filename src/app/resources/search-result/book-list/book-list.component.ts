import { Component, Input } from '@angular/core';
import { BookModel } from 'src/app/resources/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: BookModel[] = [];
  constructor() {}
}

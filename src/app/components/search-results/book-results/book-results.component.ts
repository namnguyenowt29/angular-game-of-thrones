import { Component, Input } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss'],
})
export class BookResultsComponent {
  @Input() books: BookModel[] = [];
  constructor() {}
}

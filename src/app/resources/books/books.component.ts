import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';
import { BOOK_LAST_PAGE } from 'src/assets/constants';
import { BookModel } from '../models/book.model';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: BookModel[] = [];
  pageIndex = 1;
  bookLastPage = BOOK_LAST_PAGE;
  searchParams = new HttpParams();
  // from - to filter
  date!: Date;
  dateForm!: FormGroup;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private resourceService: ResourcesService
  ) {}
  ngOnInit(): void {
    this.dateForm = new FormGroup({
      from: new FormControl(null),
      to: new FormControl(),
    });
    //filter
    this.searchParams = this.searchParams.append('page', this.pageIndex);
    this.searchParams = this.searchParams.append('pageSize', 10);
    this.searchParams = this.searchParams.append('fromReleaseDate', '');
    this.searchParams = this.searchParams.append('toReleaseDate', '');
    this.onFetchBooks();
  }
  //see book detail
  onClickBook(bookUrl: string | undefined) {
    const path = this.resourceService.getResourcesValues(bookUrl);
    this.router.navigate([`/${path.type}/${path.id}`]);
  }

  //submit date form
  onSubmitDate() {
    const fromDate = new Date(this.dateForm.value.from);
    const toDate = new Date(this.dateForm.value.to);
    if (fromDate.getTime() < toDate.getTime()) {
      if (fromDate !== null) {
        this.searchParams = this.searchParams.set(
          'fromReleaseDate',
          (<Date>fromDate).toISOString()
        );
      }
      if (toDate !== null) {
        this.searchParams = this.searchParams.set(
          'toReleaseDate',
          (<Date>toDate).toISOString()
        );
      }
      this.onFetchBooks();
    } else {
      alert('Start date must be earlier than end date, please try again');
    }
  }

  //get current page index
  handleIndexPageChange(event: number) {
    this.pageIndex = event;
    this.searchParams = this.searchParams.set('page', event);
    this.onFetchBooks();
  }

  //fetch books
  private onFetchBooks() {
    this.apiService
      .fetchResource(this.router.url, this.searchParams)
      .subscribe({
        next: data => {
          this.books = Object.values(data);
        },
        error: err => {
          console.log(err);
        },
      });
  }
}

import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visible = false;
  isSearchModalVisible = false;
  searchForm!: FormGroup;
  resources = ['books', 'houses', 'characters'];

  constructor(private router: Router, private apiService: ApiService) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.visible = false;
    });

    this.searchForm = new FormGroup({
      resourceName: new FormControl(null),
      name: new FormControl(null),
    });
  }

  onClickMenu(): void {
    this.visible = !this.visible;
  }

  handleSearchBox() {
    this.isSearchModalVisible = true;
  }
  handleCancel() {
    this.isSearchModalVisible = false;
  }
  handleSubmitSearch() {
    let searchParams = new HttpParams();
    this.isSearchModalVisible = false;
    let formValues = Object(this.searchForm.value);

    searchParams = searchParams.append('name', formValues['name']);

    this.apiService
      .fetchResource('/' + formValues['resourceName'], searchParams)
      .subscribe({
        next: data => console.log(data),
        error: err => console.log(err),
      });
    this.searchForm.reset();
  }
}

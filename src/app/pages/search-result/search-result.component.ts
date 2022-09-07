import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  resourceType = '';
  name = '';
  resource: Array<any> = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.resourceType = params['type'];
      this.name = params['name'];
      this.onSearchResource();
    });
  }
  private onSearchResource() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('name', this.name);
    this.apiService
      .fetchResource('/' + this.resourceType, searchParams)
      .subscribe({
        next: data => {
          this.resource = <Array<any>>data;
        },
        error: err => console.log(err),
      });
  }
}

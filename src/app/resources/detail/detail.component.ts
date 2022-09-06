import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  resourceType?: string = '';
  resourceValue = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private resourceService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchResource(this.router.url).subscribe({
      next: data => {
        this.resourceType = this.resourceService.getResourcesValues(
          this.router.url
        ).type;
        this.resourceValue = data;
        console.log(data);
      },
      error: err => {
        this.router.navigate(['/']);
      },
    });
  }
}

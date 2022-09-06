import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';
import {
  houseCheckboxFilters,
  houseTextFilters,
  HOUSE_LAST_PAGE,
} from 'src/assets/constants';
import { HouseModel } from '../models/house.model';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  houses: HouseModel[] = [];
  pageIndex = 1;
  houseLastPage = HOUSE_LAST_PAGE;
  searchParams = new HttpParams();
  isVisible = false;
  houseFilterForm!: FormGroup;
  textFilters = houseTextFilters;
  checkboxFilters = houseCheckboxFilters;

  constructor(
    private resourceService: ResourcesService,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.houseFilterForm = new FormGroup({
      houseTextFilter: new FormGroup({
        region: new FormControl(null),
        words: new FormControl(null),
      }),
      houseCheckboxFilter: new FormGroup({
        hasWords: new FormControl(null),
        hasTitles: new FormControl(null),
        hasSeats: new FormControl(null),
        hasDiedOut: new FormControl(null),
        hasAncestralWeapons: new FormControl(null),
      }),
    });
    this.searchParams = this.searchParams.append('page', this.pageIndex);
    this.onFetchHouse(this.searchParams);
  }

  //see house detail
  onClickHouse(houseUrl: string | undefined) {
    const path = this.resourceService.getResourcesValues(houseUrl);
    this.router.navigate([`/${path.type}/${path.id}`]);
  }

  handleFieldChange(currentField: { title: string; value: boolean }) {
    currentField.value = !currentField.value;
    if (!currentField.value)
      this.houseFilterForm
        .get(['houseTextFilter'])
        ?.get([currentField.title])
        ?.reset();
  }
  showModal() {
    this.isVisible = true;
  }
  handleCancel() {
    this.houseFilterForm.reset();
    this.isVisible = false;
  }
  //submit filter form
  handleSubmitFilter() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('page', this.pageIndex);
    let formValues = {
      ...this.houseFilterForm.value['houseTextFilter'],
      ...this.houseFilterForm.value['houseCheckboxFilter'],
    };

    for (const [key, value] of Object.entries(formValues)) {
      if (value)
        searchParams = searchParams.append(key, <boolean | string>value);
    }
    this.onFetchHouse(searchParams);
    this.isVisible = false;
  }

  handleIndexPageChange(event: number) {
    this.searchParams = this.searchParams.set('page', event);
    this.onFetchHouse(this.searchParams);
  }

  private onFetchHouse(searchParams?: HttpParams) {
    this.apiService.fetchResource(this.router.url, searchParams).subscribe({
      next: data => {
        this.houses = Object.values(data);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { HouseModel } from 'src/app/core/models/house.model';

@Component({
  selector: 'app-house-results',
  templateUrl: './house-results.component.html',
  styleUrls: ['./house-results.component.scss'],
})
export class HouseResultsComponent implements OnInit {
  @Input() houses: HouseModel[] = [];

  constructor() {}
  ngOnInit(): void {}
}

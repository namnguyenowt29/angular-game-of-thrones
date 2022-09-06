import { Component, Input, OnInit } from '@angular/core';
import { HouseModel } from '../../models/house.model';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent implements OnInit {
  @Input() house: HouseModel = {};

  constructor() {}
  ngOnInit(): void {}
}

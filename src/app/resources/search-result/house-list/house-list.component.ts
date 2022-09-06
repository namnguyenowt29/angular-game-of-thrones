import { Component, Input, OnInit } from '@angular/core';
import { HouseModel } from 'src/app/resources/models/house.model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent implements OnInit {
  @Input() houses: HouseModel[] = [];

  constructor() {}
  ngOnInit(): void {}
}

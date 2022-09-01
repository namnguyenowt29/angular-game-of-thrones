import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visible = false;
  constructor() {}
  ngOnInit(): void {}

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

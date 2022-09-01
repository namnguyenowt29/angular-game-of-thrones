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

  onClickMenu(): void {
    this.visible = !this.visible;
  }
}

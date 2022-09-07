import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: CharacterModel = {};

  constructor() {}

  ngOnInit(): void {}
}

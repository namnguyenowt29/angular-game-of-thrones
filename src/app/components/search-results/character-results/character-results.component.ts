import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-character-results',
  templateUrl: './character-results.component.html',
  styleUrls: ['./character-results.component.scss'],
})
export class CharacterResultsComponent implements OnInit {
  @Input() characters: CharacterModel[] = [];
  constructor() {}
  ngOnInit(): void {}
}

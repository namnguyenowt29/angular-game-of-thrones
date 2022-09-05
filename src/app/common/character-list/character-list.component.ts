import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/resources/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  @Input() characters: CharacterModel[] = [];
  constructor() {}
  ngOnInit(): void {}
}

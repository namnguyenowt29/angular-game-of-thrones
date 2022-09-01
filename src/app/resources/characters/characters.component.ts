import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';
import { characterFilters, CHARACTER_LAST_PAGE } from 'src/assets/constants';
import { CharacterModel } from '../models/chracter.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: CharacterModel[] = [];
  characterFilterForm!: FormGroup;
  pageIndex = 1;
  characterLastPage = CHARACTER_LAST_PAGE;
  filters = characterFilters;
  //open - close modal
  isVisible = false;

  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.characterFilterForm = new FormGroup({
      characterTextFilters: new FormGroup({
        culture: new FormControl({ value: null, disabled: false }),
        gender: new FormControl({ value: null, disabled: false }),
        born: new FormControl({ value: null, disabled: false }),
        died: new FormControl({ value: null, disabled: false }),
      }),
      isAlive: new FormControl({ value: null, disabled: false }),
    });
    this.onFetchCharacters();
  }

  handleFieldChange(currentField: { title: string; value: boolean }) {
    currentField.value = !currentField.value;
    if (!currentField.value)
      this.characterFilterForm
        .get(['characterTextFilters'])
        ?.get([currentField.title])
        ?.reset();
  }
  //handle open-close modal
  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  //submit filter form
  handleSubmitFilter(): void {
    this.isVisible = false;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('page', this.pageIndex);
    let formValues = {
      isAlive: this.characterFilterForm.get(['isAlive'])?.value,
      ...this.characterFilterForm.value['characterTextFilters'],
    };

    for (const [key, value] of Object.entries(formValues)) {
      if (value)
        searchParams = searchParams.append(key, <string | boolean>value);
    }
    this.onFetchCharacters(searchParams);
  }

  //handle page index change
  handleIndexPageChange(event: number) {
    this.pageIndex = event;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('page', event);
    this.onFetchCharacters(searchParams);
  }
  //fetch characters
  private onFetchCharacters(searchParams?: HttpParams) {
    this.apiService.fetchResource(this.router.url, searchParams).subscribe({
      next: data => {
        this.characters = Object.values(data);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}

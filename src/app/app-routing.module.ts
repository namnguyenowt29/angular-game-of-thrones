import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './resources/books/books.component';
import { CharactersComponent } from './resources/characters/characters.component';
import { BookDetailComponent } from './resources/detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './resources/detail/character-detail/character-detail.component';
import { DetailComponent } from './resources/detail/detail.component';
import { HouseDetailComponent } from './resources/detail/house-detail/house-detail.component';
import { HousesComponent } from './resources/houses/houses.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchResultComponent } from './resources/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: 'books',
        component: BooksComponent,
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
      {
        path: 'houses',
        component: HousesComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: SearchResultComponent },
  {
    path: '',
    component: DetailComponent,
    children: [
      { path: 'books/:bookId', component: BookDetailComponent },
      { path: 'characters/:characaterId', component: CharacterDetailComponent },
      { path: 'houses/:houseId', component: HouseDetailComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BookDetailComponent } from './components/detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './components/detail/character-detail/character-detail.component';
import { HouseDetailComponent } from './components/detail/house-detail/house-detail.component';

import { BooksComponent } from './components/books/books.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HousesComponent } from './components/houses/houses.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '', // each resources table
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
    path: '', // detail of resource item
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

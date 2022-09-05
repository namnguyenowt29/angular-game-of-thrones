import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './resources/books/books.component';
import { CharactersComponent } from './resources/characters/characters.component';
import { HousesComponent } from './resources/houses/houses.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchResultComponent } from './resources/search-result/search-result.component';

const routes: Routes = [
  { path: 'overview', component: HomeComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: SearchResultComponent },
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
  { path: '**', redirectTo: 'overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

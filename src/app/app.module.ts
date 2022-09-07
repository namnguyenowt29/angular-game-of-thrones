import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { FilterOutline, MenuOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroModule } from './ng-zorro-module';

import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { HeaderComponent } from './components/common/header/header.component';
import { MainTemplateComponent } from './components/template/main-template/main-template.component';

import { DetailComponent } from './pages/detail/detail.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BookResultsComponent } from './components/search-results/book-results/book-results.component';
import { CharacterResultsComponent } from './components/search-results/character-results/character-results.component';
import { HouseResultsComponent } from './components/search-results/house-results/house-results.component';
import { BookDetailComponent } from './components/detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './components/detail/character-detail/character-detail.component';
import { HouseDetailComponent } from './components/detail/house-detail/house-detail.component';
import { BooksComponent } from './components/books/books.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HousesComponent } from './components/houses/houses.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

registerLocaleData(en);

const icons: IconDefinition[] = [MenuOutline, FilterOutline];

@NgModule({
  declarations: [
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    DetailComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MainTemplateComponent,
    CharacterResultsComponent,
    BookResultsComponent,
    HouseResultsComponent,
    SearchResultComponent,
    ResourcesComponent,
    BookDetailComponent,
    HouseDetailComponent,
    CharacterDetailComponent,
    BookResultsComponent,
    CharacterResultsComponent,
    HouseResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroModule,
    HttpClientModule,
    FormsModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}

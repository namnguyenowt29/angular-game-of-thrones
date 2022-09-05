import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { FilterOutline, MenuOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { NgZorroModule } from './ng-zorro-module';
import { MainTemplateComponent } from './template/main-template/main-template.component';
import { AuthService } from './auth/auth.service';
import { BooksComponent } from './resources/books/books.component';
import { HousesComponent } from './resources/houses/houses.component';
import { CharactersComponent } from './resources/characters/characters.component';
import { ResourcesComponent } from './resources/resources.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './common/api.service';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { SearchResultComponent } from './resources/search-result/search-result.component';
import { CharacterListComponent } from './common/character-list/character-list.component';
import { BookListComponent } from './common/book-list/book-list.component';
import { HouseListComponent } from './common/house-list/house-list.component';

registerLocaleData(en);

const icons: IconDefinition[] = [MenuOutline, FilterOutline];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MainTemplateComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    ResourcesComponent,
    SearchResultComponent,
    CharacterListComponent,
    BookListComponent,
    HouseListComponent,
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
  providers: [AuthService, ApiService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}

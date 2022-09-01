import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { NgZorroModule } from './ng-zorro-module';
import { MainTemplateComponent } from './template/main-template/main-template.component';
import { AuthService } from './auth/auth.service';
import { BooksComponent } from './resources/books/books.component';
import { HousesComponent } from './resources/houses/houses.component';
import { CharactersComponent } from './resources/characters/characters.component';
import { ResourcesComponent } from './resources/resources.component';

const icons: IconDefinition[] = [MenuOutline];

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

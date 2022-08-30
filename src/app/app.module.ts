import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  MenuUnfoldOutline,
  StepBackwardFill,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgZorroModule } from './ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const icons: IconDefinition[] = [StepBackwardFill, MenuUnfoldOutline];

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

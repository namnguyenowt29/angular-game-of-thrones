import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  MenuUnfoldOutline,
  StepBackwardFill,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

const icons: IconDefinition[] = [StepBackwardFill, MenuUnfoldOutline];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NzButtonModule, NzIconModule.forChild(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'overview', component: HomeComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

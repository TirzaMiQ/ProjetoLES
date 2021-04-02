import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LayoutComponent } from './layout/layout.component';

import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './fragmentos/navbar/navbar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

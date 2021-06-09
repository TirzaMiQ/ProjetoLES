import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
//import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    NavbarComponent,
    //NavbarAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    //NavbarAdminComponent
  ]
})
export class NavbarModule { }

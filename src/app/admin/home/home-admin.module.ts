import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminComponent } from './home-admin.component';
import { HomeAdminRoutingModule } from './home-admin-routing.module';



@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    HomeAdminRoutingModule
  ],
  exports: [
    HomeAdminComponent
  ]
})
export class HomeAdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TapeteListarComponent } from './tapete-listar.component';
import { TapeteListarRoutingModule } from './tapete-listar-routing.module';



@NgModule({
  declarations: [TapeteListarComponent],
  imports: [
    CommonModule,
    TapeteListarRoutingModule
  ],
  exports: [
    TapeteListarComponent
  ]
})
export class TapeteListarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RedeListarComponent } from './rede-listar.component';
import { RedeListarRoutingModule } from './rede-listar-routing.module';


@NgModule({
  declarations: [RedeListarComponent],
  imports: [
    CommonModule,
    RedeListarRoutingModule
  ],
  exports: [
    RedeListarComponent
  ]
})
export class RedeListarModule { }

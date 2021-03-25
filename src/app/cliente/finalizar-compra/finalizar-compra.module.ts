import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizarCompraComponent } from './finalizar-compra.component';
import { FinalizarCompraRoutingModule } from './finalizar-compra-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FinalizarCompraComponent],
  imports: [
    CommonModule,
    FormsModule,
    FinalizarCompraRoutingModule
  ],
  exports: [
    FinalizarCompraComponent
  ]
})
export class FinalizarCompraModule { }

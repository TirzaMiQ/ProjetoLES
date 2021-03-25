import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProdutoComponent } from './produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';


@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [
    ProdutoComponent
  ]
})
export class ProdutoModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstoqueComponent } from './estoque/estoque.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { ProdutosRoutingModule } from './produtos-routing.module';




@NgModule({
  declarations: [
    EstoqueComponent,
    FormProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ],
  exports: [
    EstoqueComponent,
    FormProdutoComponent
  ]
})
export class ProdutosModule { }

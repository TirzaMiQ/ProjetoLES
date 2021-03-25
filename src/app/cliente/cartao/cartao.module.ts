import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CartaoListarComponent } from './cartao-listar/cartao-listar.component';
import { FormCartaoComponent } from './form-cartao/form-cartao.component';
import { FormsModule } from '@angular/forms';
import { CartaoRoutingModule } from './cartao-routing.module';


@NgModule({
  declarations: [
    CartaoListarComponent,
    FormCartaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartaoRoutingModule
  ],
  exports: [
    CartaoListarComponent,
    FormCartaoComponent
  ]
})
export class CartaoModule { }

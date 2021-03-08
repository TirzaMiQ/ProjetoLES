import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CartaoEditarComponent } from './cartao-editar/cartao-editar.component';
import { CartaoListarComponent } from './cartao-listar/cartao-listar.component';
import { CartaoCadastrarComponent } from './cartao-cadastrar/cartao-cadastrar.component';


@NgModule({
  declarations: [
    CartaoCadastrarComponent,
    CartaoListarComponent,
    CartaoEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    CartaoCadastrarComponent,
    CartaoListarComponent,
    CartaoEditarComponent
  ]
})

export class CartaoModule { }

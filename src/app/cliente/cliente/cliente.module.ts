import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EditarClienteComponent } from './editar-cliente/editar-cliente.component'
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { CartaoCadastrarComponent } from '../cartao/cartao-cadastrar/cartao-cadastrar.component';
import { CartaoListarComponent } from '../cartao/cartao-listar/cartao-listar.component';
import { CartaoEditarComponent } from '../cartao/cartao-editar/cartao-editar.component';


@NgModule({
  declarations: [
    EditarClienteComponent,
    ClienteListarComponent,
    ClienteCadastroComponent
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

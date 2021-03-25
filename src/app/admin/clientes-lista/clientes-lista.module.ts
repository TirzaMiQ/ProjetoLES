import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesListaComponent } from './clientes-lista.component';
import { ClientesListaRoutingModule } from './clientes-lista-routing.module';



@NgModule({
  declarations: [ClientesListaComponent],
  imports: [
    CommonModule,
    ClientesListaRoutingModule
  ]
})
export class ClientesListaModule { }

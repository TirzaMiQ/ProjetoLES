import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteListarComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule
  ],
  exports: [
    ClienteListarComponent,
    FormClienteComponent
  ]
})
export class ClienteModule { }

import { FormEnderecoComponent } from './form-endereco/form-endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoListarComponent } from './endereco-listar/endereco-listar.component';
import { EnderecoRoutingModule } from './endereco-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnderecoListarComponent,
    FormEnderecoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EnderecoRoutingModule
  ],
  exports: [
    EnderecoListarComponent,
    FormEnderecoComponent
  ]
})
export class EnderecoModule { }

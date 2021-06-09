import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosAdmComponent } from './pedidos-adm.component';
import { PedidosAdmRoutingModule } from './pedidos-adm-routing.module';


@NgModule({
  declarations: [PedidosAdmComponent],
  imports: [
    CommonModule,
    PedidosAdmRoutingModule
  ]
})
export class PedidosAdmModule { }

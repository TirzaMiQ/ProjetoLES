import { PedidosAdmComponent } from './pedidos-adm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pedidos-adm', component: PedidosAdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosAdmRoutingModule { }

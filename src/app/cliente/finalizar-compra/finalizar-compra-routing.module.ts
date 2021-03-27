import { FinalizarCompraComponent } from './finalizar-compra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'finalizar-compra', component: FinalizarCompraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizarCompraRoutingModule { }

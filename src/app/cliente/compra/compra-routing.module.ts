import { CompraComponent } from './compra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoListarComponent } from '../cartao/cartao-listar/cartao-listar.component';
import { FormCartaoComponent } from '../cartao/form-cartao/form-cartao.component';

const routes: Routes = [
  { path: 'compra', component: CompraComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }

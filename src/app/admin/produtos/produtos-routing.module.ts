import { EstoqueComponent } from './estoque/estoque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutoComponent } from './form-produto/form-produto.component';

const routes: Routes = [
  { path: 'estoque', component: EstoqueComponent },
  { path: 'form-produto', component: FormProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

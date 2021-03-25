import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoListarComponent } from '../cartao/cartao-listar/cartao-listar.component';
import { FormCartaoComponent } from '../cartao/form-cartao/form-cartao.component';

const routes: Routes = [
  {
    path: 'cartao', component: CartaoListarComponent, children: [

      {
        path: 'cartao-listar', component: CartaoListarComponent, children: [

          { path: 'form-cartao', component: FormCartaoComponent },
          { path: '', redirectTo: 'cartao-listar', pathMatch: 'full' }

        ]
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }

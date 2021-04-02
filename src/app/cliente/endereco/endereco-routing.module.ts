import { EnderecoListarComponent } from './endereco-listar/endereco-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnderecoComponent } from './form-endereco/form-endereco.component';

const routes: Routes = [
      {
        path: 'endereco-listar', component: EnderecoListarComponent, children: [
          { path: 'form-endereco', component: FormEnderecoComponent },
          //{ path: '', redirectTo: 'endereco-listar', pathMatch: 'full' }
        ]
      }
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }

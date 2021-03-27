import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/fragmentos/navbar/navbar.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

const routes: Routes = [
  {
    //path: 'perfil', component: NavbarComponent, children: [

    path: 'cliente-listar', component: ClienteListarComponent, children: [
      { path: 'form-cliente', component: FormClienteComponent },
      { path: '', redirectTo: 'cliente-listar', pathMatch: 'full' }
    ]
  }

   // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

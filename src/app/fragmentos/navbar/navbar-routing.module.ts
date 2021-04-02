import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../../cliente/home/home.component';
import { RedeListarComponent } from './../../cliente/produto/rede/rede-listar/rede-listar.component';
import { TapeteListarComponent } from './../../cliente/produto/tapete/tapete-listar/tapete-listar.component';
import { CartaoListarComponent } from '../../cliente/cartao/cartao-listar/cartao-listar.component';
import { ClienteListarComponent } from 'src/app/cliente/cliente/cliente-listar/cliente-listar.component';
import { EnderecoListarComponent } from '../../cliente/endereco/endereco-listar/endereco-listar.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rede', component: RedeListarComponent },
  { path: 'tapete', component: TapeteListarComponent },
  { path: 'cliente', component: ClienteListarComponent },
  { path: 'endereco', component: EnderecoListarComponent },
  { path: 'cartao', component: CartaoListarComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class NavbarRoutingModule { }

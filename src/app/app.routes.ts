import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastroComponent } from './cliente/cliente/cliente-cadastro/cliente-cadastro.component';
import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './login/login.component';
import { RedeListarComponent } from './cliente/produto/rede/rede-listar/rede-listar.component';
import { TapeteListarComponent } from './cliente/produto/tapete/tapete-listar/tapete-listar.component';
import { EditarClienteComponent } from './cliente/cliente/editar-cliente/editar-cliente.component';
import { CartaoListarComponent } from './cliente/cartao/cartao-listar/cartao-listar.component';
import { ClienteListarComponent } from './cliente/cliente/cliente-listar/cliente-listar.component';
import { NavbarComponent } from './fragmentos/navbar/navbar.component';
import { EnderecoListarComponent } from './cliente/endereco/endereco-listar/endereco-listar.component';
import { EnderecoEditarComponent } from './cliente/endereco/endereco-editar/endereco-editar.component';
import { EnderecoCadastrarComponent } from './cliente/endereco/endereco-cadastrar/endereco-cadastrar.component';
import { CartaoEditarComponent } from './cliente/cartao/cartao-editar/cartao-editar.component';
import { CartaoCadastrarComponent } from './cliente/cartao/cartao-cadastrar/cartao-cadastrar.component';
import { ProdutoComponent } from './cliente/produto/produto/produto.component';
import { CarrinhoComponent } from './cliente/produto/carrinho/carrinho.component';
import { CompraComponent } from './cliente/compra/compra.component';
import { FinalizarCompraComponent } from './cliente/finalizar-compra/finalizar-compra.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'perfil', component: NavbarComponent, children: [
      {
        path: 'cliente', component: ClienteListarComponent, children: [

          {
            path: 'editar-cliente', component: EditarClienteComponent, children: [

              { path: 'cliente-cadastrar', component: ClienteCadastroComponent },
              { path: '', redirectTo: 'cliente', pathMatch: 'full' }

            ]
          }

        ]
      },
      {
        path: 'endereco', component: EnderecoListarComponent, children: [

          {
            path: 'endereco-editar', component: EnderecoEditarComponent, children: [

              { path: 'endereco-cadastrar', component: EnderecoCadastrarComponent },
              { path: '', redirectTo: 'endereco', pathMatch: 'full' }

            ]
          }

        ]
      },
      {
        path: 'cartao', component: CartaoListarComponent, children: [

          {
            path: 'cartao-editar', component: CartaoEditarComponent, children: [

              { path: 'cartao-cadastrar', component: CartaoCadastrarComponent }

            ]
          }

        ]
      }

    ]
  },

  {
    path: 'rede', component: RedeListarComponent, children: [
      {
        path: 'produto', component: ProdutoComponent, children: [
          {
            path: 'carrinho', component: CarrinhoComponent, children: [
              {
                path: 'comprar', component: CompraComponent, children: [
                  { path: 'finalizar-compra', component: FinalizarCompraComponent }
                ]
              }
            ]
          }

        ]
      }
    ]
  },
  {
    path: 'tapete', component: TapeteListarComponent, children: [
      {
        path: 'produto', component: ProdutoComponent, children: [
          {
            path: 'carrinho', component: CarrinhoComponent, children: [
              {
                path: 'comprar', component: CompraComponent, children: [
                  { path: 'finalizar-compra', component: FinalizarCompraComponent }
                ]
              }
            ]
          }

        ]
      }
    ]
  },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*import { FormClienteComponent } from './cliente/cliente/form-cliente/form-cliente.component';
import { EstoqueComponent } from './admin/produtos/estoque/estoque.component';
import { FormEnderecoComponent } from './cliente/endereco/form-endereco/form-endereco.component';
import { FormProdutoComponent } from './admin/produtos/form-produto/form-produto.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './login/login.component';
import { RedeListarComponent } from './cliente/produto/rede/rede-listar/rede-listar.component';
import { TapeteListarComponent } from './cliente/produto/tapete/tapete-listar/tapete-listar.component';
import { CartaoListarComponent } from './cliente/cartao/cartao-listar/cartao-listar.component';
import { ClienteListarComponent } from './cliente/cliente/cliente-listar/cliente-listar.component';
import { NavbarComponent } from './fragmentos/navbar/navbar.component';
import { EnderecoListarComponent } from './cliente/endereco/endereco-listar/endereco-listar.component';
import { ProdutoComponent } from './cliente/produto/produto/produto.component';
import { CarrinhoComponent } from './cliente/produto/carrinho/carrinho.component';
import { CompraComponent } from './cliente/compra/compra.component';
import { FinalizarCompraComponent } from './cliente/finalizar-compra/finalizar-compra.component';
import { HomeAdminComponent } from './admin/home/home-admin.component';
import { ClientesListaComponent } from './admin/clientes-lista/clientes-lista.component';
import { PedidosComponent } from './cliente/pedidos/pedidos.component';
import { TrocaComponent } from './admin/troca/troca.component';
import { FormCartaoComponent } from './cliente/cartao/form-cartao/form-cartao.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'home-admin', component: HomeAdminComponent, children: [
      { path: 'produtos', component: HomeAdminComponent },
      { path: 'estoque', component: EstoqueComponent },
      { path: 'form-produto', component: FormProdutoComponent },
      //{ path: 'form-produto', component: FormProdutoComponent },
      //{ path: 'entrega', component: TrocaComponent },
      { path: 'troca', component: TrocaComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'clientes-lista', component: ClientesListaComponent },
    ]
  },
  { path: 'produtos', component: HomeAdminComponent, children: [
    { path: 'estoque', component: EstoqueComponent },
    { path: 'rede', component: HomeAdminComponent, children: [
      { path: 'rede-cadastrar', component: RedeCadastrarComponent },
      { path: 'rede-editar', component: RedeEditarComponent },
      { path: 'rede-listar', component: RedeListarComponent },
    ] },
    { path: 'tapete', component: HomeAdminComponent, children: [
      { path: 'tapete-cadastrar', component: TapeteCadastrarComponent },
      { path: 'tapete-editar', component: TapeteEditarComponent },
      { path: 'tapete-listar', component: TapeteListarComponent },
    ] },
  ] },


  // cliente ou administrador é a mesma tela de login
  { path: 'login', component: LoginComponent },

  {
    path: 'perfil', component: NavbarComponent, children: [
      {
        path: 'cliente-listar', component: ClienteListarComponent, children: [

          { path: 'form-cliente', component: FormClienteComponent },
          { path: '', redirectTo: 'cliente-listar', pathMatch: 'full' }
        ]
      }

    ]
  },
  {
    path: 'endereco', component: EnderecoListarComponent, children: [

      {
        path: 'endereco-listar', component: EnderecoListarComponent, children: [

          { path: 'form-endereco', component: FormEnderecoComponent },
          { path: '', redirectTo: 'endereco-listar', pathMatch: 'full' }
        ]
      }

    ]
  },
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
  {
    path: 'rede-listar', component: RedeListarComponent, children: [
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
    path: 'tapete-listar', component: TapeteListarComponent, children: [
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
export class AppRoutingModule { } */

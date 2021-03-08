import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestService } from './services/request.service';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './cliente/home/home.component';
import { ClienteCadastroComponent } from './cliente/cliente/cliente-cadastro/cliente-cadastro.component';
import { NavbarComponent } from './fragmentos/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RedeListarComponent } from './cliente/produto/rede/rede-listar/rede-listar.component';
import { TapeteListarComponent } from './cliente/produto/tapete/tapete-listar/tapete-listar.component';
import { EditarClienteComponent } from './cliente/cliente/editar-cliente/editar-cliente.component';
import { NavbarLogadoComponent } from './fragmentos/navbar-logado/navbar-logado.component';
import { HomeAdminComponent } from './admin/home/home-admin.component';
import { CartaoCadastrarComponent } from './cliente/cartao/cartao-cadastrar/cartao-cadastrar.component';
import { CartaoEditarComponent } from './cliente/cartao/cartao-editar/cartao-editar.component';
import { CartaoListarComponent } from './cliente/cartao/cartao-listar/cartao-listar.component';
import { EnderecoCadastrarComponent } from './cliente/endereco/endereco-cadastrar/endereco-cadastrar.component';
import { EnderecoEditarComponent } from './cliente/endereco/endereco-editar/endereco-editar.component';
import { EnderecoListarComponent } from './cliente/endereco/endereco-listar/endereco-listar.component';
import { ProdutoComponent } from './cliente/produto/produto/produto.component';
import { CarrinhoComponent } from './cliente/produto/carrinho/carrinho.component';
import { CompraComponent } from './cliente/compra/compra.component';
import { FinalizarCompraComponent } from './cliente/finalizar-compra/finalizar-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    NavbarLogadoComponent,
    HomeAdminComponent,
    ClienteCadastroComponent,
    EditarClienteComponent,
    CartaoCadastrarComponent,
    CartaoListarComponent,
    CartaoEditarComponent,
    EnderecoCadastrarComponent,
    EnderecoEditarComponent,
    EnderecoListarComponent,
    ProdutoComponent,
    CarrinhoComponent,
    RedeListarComponent,
    TapeteListarComponent,
    CompraComponent,
    FinalizarCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

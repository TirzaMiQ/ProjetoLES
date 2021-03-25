import { ClientesListaModule } from './admin/clientes-lista/clientes-lista.module';
import { LoginModule } from './login/login.module';
import { TapeteListarModule } from './cliente/produto/tapete/tapete-listar/tapete-listar.module';
import { ProdutoModule } from './cliente/produto/produto/produto.module';
import { CarrinhoModule } from './cliente/produto/carrinho/carrinho.module';
import { HomeModule } from './cliente/home/home.module';
import { FinalizarCompraModule } from './cliente/finalizar-compra/finalizar-compra.module';
import { CompraModule } from './cliente/compra/compra.module';
import { TrocaModule } from './admin/troca/troca.module';
import { PedidosModule } from './admin/pedidos/pedidos.module';
import { HomeAdminModule } from './admin/home/home-admin.module';
import { RedeListarModule } from './cliente/produto/rede/rede-listar/rede-listar.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestService } from './services/request.service';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './admin/home/home-admin.component';
import { ClienteService } from './cliente/cliente/cliente.service';
import { CartaoService } from './cliente/cartao/cartao.service';
import { EnderecoService } from './cliente/endereco/endereco.service';
import { ProdutoService } from './cliente/produto/produto.service';
import { ProdutosService } from './admin/produtos/produtos.service';
import { ProdutosModule } from './admin/produtos/produtos.module';
import { CartaoModule } from './cliente/cartao/cartao.module';
import { ClienteModule } from './cliente/cliente/cliente.module';
import { EnderecoModule } from './cliente/endereco/endereco.module';



@NgModule({
  declarations: [
    AppComponent,
   // HomeComponent,
    //LoginComponent,
   // HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    //LoginModule,
    ClientesListaModule,
    //HomeAdminModule,
    PedidosModule,
    ProdutosModule,
    TrocaModule,
    CartaoModule,
    ClienteModule,
    CompraModule,
    EnderecoModule,
    FinalizarCompraModule,
    HomeModule,
    CarrinhoModule,
    ProdutoModule,
    RedeListarModule,
    TapeteListarModule
  ],
  providers: [
    RequestService,
    ClienteService,
    CartaoService,
    EnderecoService,
    ProdutoService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

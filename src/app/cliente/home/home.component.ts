import { listaProduto } from './lista-produtos.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';

@Component({
  // esses selectores viram tags que exibem o conteudo da html na app.html(tela inicial)
  selector: 'tela-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: listaProduto[] = [];

  constructor(
    private service: ProdutoService,
    private router: Router) {}

    ngOnInit() {
      this.listAll();
    }

    listAll(){
      this.service.getProdutos()
      .subscribe((response: any) => {
        this.produtos = response.data;
      })
    }

}

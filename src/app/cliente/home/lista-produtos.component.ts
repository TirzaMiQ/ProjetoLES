/*import { Endereco } from './../endereco.model';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../../endereco.service';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { listaProduto } from './lista-produtos.model';

@Component({
  selector: 'lista-produtos',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ListaProdutosComponent implements OnInit {

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

} */

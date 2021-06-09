import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  produto: Produto;
  produtos: Produto[];
  produtoSelecionado: Produto;
  id: number;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getProdutos().subscribe(resposta => this.produtos = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/form-produto'])
  }

  /*voltarParaListagem() {
    this.router.navigate(['/estoque'])
  }*/

  preparaInativacao(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.produto)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar/cadastrar o produto.']
        })


    } else {

      this.service
        .salvar(this.produto)
        .subscribe(response => {
          this.success = true;
          this.errors;
          this.produto = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })

    }

  }

  inativarProduto() {
    this.service
      .inativar(this.produtoSelecionado)
      .subscribe(
        response => {
          this.success;
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      )

  }

}

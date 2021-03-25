import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

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
      .getCartoes().subscribe(resposta => this.produtos = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/perfil/cartao-cadastrar'])
  }

  voltarParaListagem() {
    this.router.navigate(['/perfil/cartao'])
  }

  preparaDelecao(produto: Produto) {
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
          this.errors = ['Erro ao cadastrar o produto.']
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

  deletarCartao() {
    this.service
      .deletar(this.produtoSelecionado)
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

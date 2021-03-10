import { FormsModule } from '@angular/forms';
import { Cartao } from '../cartao.model';
import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao-cadastrar.component.html',
  styleUrls: ['./cartao-cadastrar.component.css']
})
export class CartaoCadastrarComponent implements OnInit {

  cartao: Cartao;
  cartoes: Cartao[];
  cartaoSelecionado: Cartao;
  id: number;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: CartaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getCartoes().subscribe(resposta => this.cartoes = resposta);
  }

 /* novoCadastro() {
    this.router.navigate(['/perfil/cartao-cadastrar'])
  } */

  voltarParaListagem() {
    this.router.navigate(['/perfil/cartao'])
  }

 /* preparaDelecao(cartao: Cartao) {
    this.cartaoSelecionado = cartao;
  } */

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.cartao)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao cadastrar o cartão.']
        })


    } else {

      this.service
        .salvar(this.cartao)
        .subscribe(response => {
          this.success = true;
          this.errors;
          this.cartao = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })

    }

  }

  /* deletarCartao() {
    this.service
      .deletar(this.cartaoSelecionado)
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

  } */
}

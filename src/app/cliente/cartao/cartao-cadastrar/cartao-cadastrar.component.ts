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

  cartoes: Cartao[] = [];
  cartaoSelecionado: Cartao;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: CartaoService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getCartoes().subscribe( resposta => this.cartoes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/cliente/cartao'])
  }

  preparaDelecao(cartao: Cartao){
    this.cartaoSelecionado = cartao;
  }

  deletarCartao(){
    this.service
      .deletar(this.cartaoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cartão deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cartão.'
      )
  }

}

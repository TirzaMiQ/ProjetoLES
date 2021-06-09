import { Cartao } from './../cartao.model';
import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cartao',
  templateUrl: './cartao-listar.component.html',
  styleUrls: ['./cartao-listar.component.css']
})
export class CartaoListarComponent implements OnInit {

  cartoes: Cartao[] = [];
  cartaoSelecionado: Cartao;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: CartaoService,
    private router: Router) {}

    ngOnInit() {
      this.listAll();
    }

    listAll(){
      this.service.getCartoes()
      .subscribe((response: any) => {
        this.cartoes = response.data;
      })
    }

    novoCadastroCartao(){
      this.router.navigate(['/form-cartao'])
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

import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'endereco',
  templateUrl: './endereco-cadastrar.component.html',
  styleUrls: ['./endereco-cadastrar.component.css']
})
export class EnderecoCadastrarComponent implements OnInit {


  enderecos: Endereco[] = [];
 // enderecoSelecionado: Endereco;
  //mensagemSucesso: string;
  //mensagemErro: string;

  constructor(
    private service: EnderecoService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getEnderecos().subscribe( resposta => this.enderecos = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/cliente/endereco-cadastrar'])
  }

  /* preparaDelecao(enderecos: Endereco){
    this.enderecoSelecionado = enderecos;
  }

  deletarEndereco(){
    this.service
      .deletar(this.enderecoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Endereço deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o endereço.'
      )
  } */
}

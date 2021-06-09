import { Endereco } from './../endereco.model';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from './../endereco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-listar',
  templateUrl: './endereco-listar.component.html',
  styleUrls: ['./endereco-listar.component.css']
})
export class EnderecoListarComponent implements OnInit {

  enderecos: Endereco[] ;
  enderecoSelecionado: Endereco;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: EnderecoService,
    private router: Router) {}

    ngOnInit() {
      this.listAll();
    }

    listAll(){
      this.service.getEnderecos()
      .subscribe((response: any) => {
        this.enderecos = response.data;
      })
    }

    novoCadastroEndereco(){
      this.router.navigate(['/form-endereco'])
    }

    preparaDelecao(endereco: Endereco){
      this.enderecoSelecionado = endereco;
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
    }

}

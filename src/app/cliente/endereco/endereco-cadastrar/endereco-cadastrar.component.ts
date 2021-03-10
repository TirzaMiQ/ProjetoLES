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

  endereco: Endereco;
  enderecos: Endereco[] = [];
  enderecoSelecionado: Endereco;
  id: number;
  success: boolean = false;
  errors: String[];


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

  voltarParaListagem() {
    this.router.navigate(['/perfil/cartao'])
  }


  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.endereco)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })


    } else {

      this.service
        .salvar(this.endereco)
        .subscribe(response => {
          this.success = true;
          this.errors;
          this.endereco = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })

    }

  }

  deletarEndereco() {
    this.service
      .deletar(this.enderecoSelecionado)
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

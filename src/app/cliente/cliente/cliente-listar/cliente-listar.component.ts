import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})


export class ClienteListarComponent implements OnInit {

  cliente: Cliente;
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    this.service.getClientes()
    .subscribe((response: any) => {
      this.cliente = response.data;
    })
  }

 /* editarCadastroCliente(){
    this.router.navigate(['/form-cliente'])
  } */

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarContaCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Conta deletada com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar a conta.'
      )
  }



}

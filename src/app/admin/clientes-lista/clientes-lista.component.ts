import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesLista } from './clientesLista.model';
import { ClientesListaService } from './clientesLista.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: ClientesLista[] = [];
  cliente = ClientesLista;
  success: boolean = false;
  errors: String[];
  id: number | number;

  constructor(
    private service: ClientesListaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getClienteListaById(this.id)
            .subscribe(
              response => this.cliente = response ,
              errorResponse => this.cliente = new ClientesLista()
            )
        }
    })
  }

  /*voltarParaListagem(){
    this.router.navigate(['/perfil/cliente'])
  } */

  inativarCliente() {
    if(this.id) {
      this.service.inativar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors;
      }, errorResponse => {
        this.errors = ['Erro ao inativar o cliente.']
      })
    }
  }

  ativarCliente() {
    if (this.id) {

      this.service
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao ativar o cliente.']
        })


    } /* else {

      this.service
        .salvar(this.clientes)
        .subscribe(response => {
          this.success = true;
          this.errors = null as any;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })

    } */

  }

}

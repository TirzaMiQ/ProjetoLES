import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  clientes: Cliente;
  success: boolean = false;
  errors: String[];
  id: number | number;

  constructor(
    private service: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.clientes = new Cliente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.clientes = response,
            errorResponse => this.clientes = new Cliente()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/cliente/lista'])
  }

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.clientes)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })


    } else {

      this.service
        .salvar(this.clientes)
        .subscribe(response => {
          this.success = true;
          this.errors;
          this.clientes = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })

    }

  }

}

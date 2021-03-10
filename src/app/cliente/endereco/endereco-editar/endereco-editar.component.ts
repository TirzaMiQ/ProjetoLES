import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-endereco-editar',
  templateUrl: './endereco-editar.component.html',
  styleUrls: ['./endereco-editar.component.css']
})
export class EnderecoEditarComponent implements OnInit {

  endereco: Endereco;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: EnderecoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //this.endereco = new Endereco();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getEnderecoById(this.id)
          .subscribe(
            response => this.endereco = response,
            //errorResponse => this.endereco = new Endereco()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/perfil/endereco'])
  }

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.endereco)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o endereco.']
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

}

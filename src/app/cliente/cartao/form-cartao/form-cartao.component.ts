import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cartao } from '../cartao.model';
import { CartaoService } from '../cartao.service';

@Component({
  selector: 'app-form-cartao',
  templateUrl: './form-cartao.component.html',
  styleUrls: ['./form-cartao.component.css']
})
export class FormCartaoComponent implements OnInit {

  cartao: Cartao;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: CartaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cartao = new Cartao();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getCartaoById(this.id)
          .subscribe(
            response => this.cartao = response,
            errorResponse => this.cartao = new Cartao()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/perfil/cartao'])
  }

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.cartao)
        .subscribe(response => {
          this.success = true;
          this.errors;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar/cadastrar o cartão.']
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

}

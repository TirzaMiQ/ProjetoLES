import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private requestService: RequestService<Client>) { }

  ngOnInit(): void {
  }

  get(){
    this.requestService.get(new Client()).subscribe(
      response => {
        response.nome
        response.sobrenome
      },
      error => {
        alert("Erro na comunicação com o servidor")
      }
    )
  }

}

export class Client{
  nome?: string;
  sobrenome?: string;
}

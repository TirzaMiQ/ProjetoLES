import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cadastro',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  clientes: Cliente;
  success: boolean = false;
  errors: String[];
  id: number | number;

  constructor(
    private service: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe((response: any) => {
      this.clientes = response.data;
    })
  }



}

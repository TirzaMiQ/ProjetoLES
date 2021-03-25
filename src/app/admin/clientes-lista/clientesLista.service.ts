import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ClientesListaModule } from './clientes-lista.module';
import { ClientesLista } from './clientesLista.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesListaService {

  apiURL: string = environment.apiURLBase + '/api/v1/admin/clientes-lista';

  constructor( private http: HttpClient ) {}

  /*salvar( cliente: ClientesListaModule ) : Observable<ClientesListaModule> {
    return this.http.post<ClientesListaModule>( `${this.apiURL}` , cliente);
  } */

  atualizar( cliente: ClientesLista ) : Observable<any> {
    return this.http.put<ClientesLista>(`${this.apiURL}/${cliente.id}` , cliente);
  }

  getClientesLista() : Observable<ClientesLista[]> {
    return this.http.get<ClientesLista[]>(this.apiURL);
  }

  getClienteListaById(id: number) : Observable<ClientesLista> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: ClientesLista) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

}

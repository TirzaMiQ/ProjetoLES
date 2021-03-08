import { Cartao } from './cartao.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  apiURL: string = environment.apiURLBase + '/api/v1/cartao';

  constructor( private http: HttpClient ) {}

  salvar( cartao: Cartao ) : Observable<Cartao> {
    return this.http.post<Cartao>( `${this.apiURL}` , cartao);
  }

  atualizar( cartao: Cartao ) : Observable<any> {
    return this.http.put<Cartao>(`${this.apiURL}/${cartao.id}` , cartao);
  }

  getCartoes() : Observable<Cartao[]> {
    return this.http.get<Cartao[]>(this.apiURL);
  }

  getCartaoById(id: number) : Observable<Cartao> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cartao: Cartao) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cartao.id}`);
  }

}

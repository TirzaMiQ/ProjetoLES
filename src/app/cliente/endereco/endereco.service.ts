import { Endereco } from './endereco.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class EnderecoService {

  apiURL: string = environment.apiURLBase + '/api/v1/endereco';

  constructor( private http: HttpClient ) {}

  salvar( endereco: Endereco ) : Observable<Endereco> {
    return this.http.post<Endereco>( `${this.apiURL}` , endereco);
  }

  atualizar( endereco: Endereco ) : Observable<any> {
    return this.http.put<Endereco>(`${this.apiURL}/${endereco.id}` , endereco);
  }

  getEnderecos() : Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiURL);
  }

  getEnderecoById(id: number) : Observable<Endereco> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(endereco: Endereco) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${endereco.id}`);
  }
}

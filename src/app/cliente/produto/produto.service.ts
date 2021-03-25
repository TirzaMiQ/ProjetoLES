import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';

@Injectable({
  providedIn: "root",
})
export class ProdutoService {

  apiURL: string = environment.apiURLBase + '/api/v1/produtos';

  constructor( private http: HttpClient ) {}

  /*salvar( produto: Produto ) : Observable<Produto> {
    return this.http.post<Produto>( `${this.apiURL}` , produto);
  }*/

  /*atualizar( produto: Produto ) : Observable<any> {
    return this.http.put<Produto>(`${this.apiURL}/${produto.id}` , produto);
  }*/

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL);
  }

  /*getProdutoById(id: number) : Observable<Produto> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }*/

  /*deletar(produto: Produto) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${produto.id}`);
  }*/

}

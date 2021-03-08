import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const API_URL = 'https://just-choice-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class RequestService<T> {

  constructor(private httpClient: HttpClient) {

  }

  get(object: T): Observable<T>{
    return this.httpClient.get<T>(API_URL, HTTP_OPTIONS);
  }



}

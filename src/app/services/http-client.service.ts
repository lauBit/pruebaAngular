import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { from } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 url:string;
 usuario:Usuario;

  constructor(
    private _http: HttpClient
  ) {     
    this.url = "https://testbankapi.firebaseio.com/clients.json";
  }

  obtener(){
    return this._http.get(
      this.url
    ).pipe(map(res=>res))
  }

  registrar(usuario){
    let params = JSON.stringify(usuario);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.post(
      this.url,
      params,
      options
    ).pipe(map(res => res)) 
  }
}

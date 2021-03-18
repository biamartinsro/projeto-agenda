import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }
 URL: string= "http://localhost:3001"

 cadastrarContato(contato: Contato): Observable<any>{
   return this.http.post(`${this.URL}/contatos/`,contato);
   
 }

  listarContatos() : Observable<any> {
    return this.http.get(`${this.URL}/contatos`);
  }

  atualizarContato(id: any, contato: Contato): Observable<any>{
    return this.http.put(`${this.URL}/contatos/${id}`,contato);
  }

  removerContato(id: any){
    return this.http.delete(`${this.URL}/contatos/${id}`);
  }
}

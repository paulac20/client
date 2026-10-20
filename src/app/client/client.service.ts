import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './model/Client';
import { CLIENT_DATA } from './model/mock-clients';
import { HttpClient } from '@angular/common/http';

const pageUrl= 'http://localhost:8080/'
const page='client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(pageUrl + page);
  }

  saveClient(client:Client): Observable<Client>{
    let url = pageUrl + page;
    if (client.id != null) url += '/'+client.id;
    
    return this.http.put<Client>(url, client);
  }

  deleteClient(idClient: number): Observable<any>{
    return this.http.delete(pageUrl + page + '/' + idClient);
  }
}
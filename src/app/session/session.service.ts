import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './model/Login';
import { Observable } from 'rxjs';
import { Usser } from './model/Usser';

const pageUrl= 'http://localhost:8080/'
const pageEndpoint= 'session/'
const loginEndpoint= 'login'
const registerEndpoint= 'register'
const authenticatedEndpoint = 'isAuthenticated'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient
  ) { }

  login(login: Login): Observable<void> {
    return this.http.post<void>(pageUrl + pageEndpoint + loginEndpoint, login);
  }

  register(usser: Usser): Observable<Usser>{
    return this.http.post<Usser>(pageUrl + pageEndpoint + registerEndpoint, usser);
  }

  isAuthenticated(): Observable<boolean>{
    return this.http.get<boolean>(pageUrl + pageEndpoint + authenticatedEndpoint);
  }
}

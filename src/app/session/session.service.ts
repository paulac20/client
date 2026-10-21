import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './model/Login';
import { Observable } from 'rxjs';

const pageUrl= 'http://localhost:8080/'
const login= 'login'
const register= 'register'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient
  ) { }

  login(login: Login): Observable<void> {
    return null;
  }
}

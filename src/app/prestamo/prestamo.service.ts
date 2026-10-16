import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prestamo } from './model/Prestamo';
import { PRESTAMO_DATA } from './model/mock-prestamos';
import { Pageable } from '../core/model/page/Pageable';
import { PrestamoPage } from './model/PrestamoPage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(
    private http: HttpClient
  ) { }

  getPrestamos(pageable: Pageable, gameId?: number, clientId?: number, date?: string): Observable<PrestamoPage>{
    return this.http.post<PrestamoPage>('http://localhost:8080/prestamo', {pageable:pageable, gameId, clientId, date});
  }

  savePrestamo(prestamo: Prestamo): Observable<void>{
    let url = 'http://localhost:8080/prestamo';
    if (prestamo.id != null) url += '/'+prestamo.id;

    return this.http.put<void>(url, prestamo);
  }

  deletePrestamo(idPrestamo: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/prestamo/'+idPrestamo);
  }
}

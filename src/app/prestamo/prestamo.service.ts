import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prestamo } from './model/Prestamo';
import { PRESTAMO_DATA } from './model/mock-prestamos';
import { Pageable } from '../core/model/page/Pageable';
import { PrestamoPage } from './model/PrestamoPage';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor() { }

  getPrestamos(pageable: Pageable): Observable<PrestamoPage>{
    return of(PRESTAMO_DATA);
  }

  savePrestamo(prestamo: Prestamo): Observable<void>{
    return of<void>(undefined);
  }

  deletePrestamo(idPrestamo: number): Observable<void>{
    return of<void>(undefined);
  }
}

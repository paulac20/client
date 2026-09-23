import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Category } from './model/category';
import { CATEGORY_DATA } from './model/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  // Método que define que el servicio va a proporcionar una lista de categorías de forma 
  // asíncrona usando un Observable
  // Observable: Objeto que espera datos que pueden llegar ahora o en el futuro
  getCategories(): Observable<Category[]>{
    return of (CATEGORY_DATA);
  }

  // Médodo para editar las categorías
  saveCategory(category: Category): Observable<Category>{
    return of (category);
  }

  // Método para eliminar las categorías
  deleteCategory(idCategory: number): Observable<number>{
    return of (idCategory);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Category } from './model/category';
import { CATEGORY_DATA } from './model/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient  // Para conectar con el backend
  ) { }

  // Método que define que el servicio va a proporcionar una lista de categorías de forma 
  // asíncrona usando un Observable
  // Observable: Objeto que espera datos que pueden llegar ahora o en el futuro
  getCategories(): Observable<Category[]>{
    // Devolvemos las categorías obtenidas en el backend
    return this.http.get<Category[]>('http://localhost:8080/category');
  }

  // Médodo para editar las categorías
  saveCategory(category: Category): Observable<Category>{
    let url = 'http://localhost:8080/category';
    if (category.id != null) url += '/'+category.id;

    return this.http.put<Category>(url, category);
  }

  // Método para eliminar las categorías
  deleteCategory(idCategory: number): Observable<any>{
    return this.http.delete('http://localhost:8080/category/'+idCategory);
  }
}

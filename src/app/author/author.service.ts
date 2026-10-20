import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Author } from './model/Author';
import { AuthorPage } from './model/AuthorPage';
import { AUTHOR_DATA_LIST } from './model/mock-authors-list';

const pageUrl= 'http://localhost:8080/'
const page='author'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) {}

  getAuthors(pageable: Pageable): Observable<AuthorPage> {
      return this.http.post<AuthorPage>(pageUrl + page, {pageable:pageable});
  }

  saveAuthor(author: Author): Observable<void> {
    let url = pageUrl + page;
    if (author.id != null) url += '/'+author.id;

    return this.http.put<void>(url, author);
  }

  deleteAuthor(idAuthor : number): Observable<void> {
    return this.http.delete<void>(pageUrl + page + idAuthor);
  }    

  // Para poder recuperar una lista de autores. Antes sólo teníamos una página
  getAllAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(pageUrl + page);
    }
}

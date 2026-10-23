import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { AuthorEditComponent } from '../author-edit/author-edit.component';
import { AuthorService } from '../author.service';
import { Author } from '../model/Author';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionService } from 'src/app/session/session.service';

@Component({
selector: 'app-author-list',
templateUrl: './author-list.component.html',
styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;
  durationInSeconds=5;

  dataSource = new MatTableDataSource<Author>();
  displayedColumns: string[] = ['id', 'name', 'nationality', 'action'];

  constructor(
      private authorService: AuthorService,
      public dialog: MatDialog,
      private snackBar: MatSnackBar,
      public sessionService: SessionService
  ) { }

  ngOnInit(): void {
      this.loadPage();
  }

  // Con event? podemos llamar al método de dos maneras: 1- loadPage() 2- loadPage(event)
  loadPage(event?: PageEvent) {

    // Creamos el objeto pageable que se enviará al servicio para decirle qué datos queremos recibir
    let pageable : Pageable =  {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      // Para indicar cómo queremos ordenar los autores
      sort: [{
        property: 'id',
        direction: 'ASC'
      }]
    }

    // Detecta si el usuario ha interactuado con el paginador (ha pasado la página o ha seleccionado otro tamaño).
    // Si eso ocurre, se actualiza el tamaño de la página y el número de la página
    if (event != null) {
      pageable.pageSize = event.pageSize
      pageable.pageNumber = event.pageIndex;
    }

    // Llamamos al servicio para cargar los autores en las páginas
    this.authorService.getAuthors(pageable).subscribe(data => {
      this.dataSource.data = data.content;
      this.pageNumber = data.pageable.pageNumber;
      this.pageSize = data.pageable.pageSize;
      this.totalElements = data.totalElements;
    });

  }  

  createAuthor() {      
    const dialogRef = this.dialog.open(AuthorEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });      
  }  

  editAuthor(author: Author) {    
    const dialogRef = this.dialog.open(AuthorEditComponent, {
      data: { author: author }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });    
  }

  deleteAuthor(author: Author) {    
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Eliminar autor", description: "Atención si borra el autor se perderán sus datos.<br> ¿Desea eliminar el autor?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorService.deleteAuthor(author.id).subscribe(result =>  {
          this.ngOnInit();
        }, res=>{
          this.showError(res);
        }); 
      }
    });
  }  

  showError(res: HttpErrorResponse){
    this.openSnackBar('No se puede eliminar este autor porque tiene juegos asociados.')
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
        duration: this.durationInSeconds*1000,
    });
  }
}
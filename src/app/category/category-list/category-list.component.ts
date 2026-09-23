import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  // Inyectamos el servicio (lo definimos dentro del constructor)
  constructor(
    private categoryService: CategoryService,
    // Nos permite abrir un componente dentro de un diálogo si lo ponemos dentro del constructor
    public dialog: MatDialog,   
    
  ) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // LLamamos al método getCateories() y le decimos que cuando emita la lista de categorías,
    // queremos recibirlas en la tabla para mostrarlas
    this.categoryService.getCategories().subscribe(categories => this.dataSource.data = categories);
  }

  // Método para crear categorías.
  createCategory(){
    //Creamos un diálogo con el componente CategoryEditComponent dentro
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      // Objeto donde pondremos los datos que queremos pasar entre los componentes
      data :{}
    });

    // Después de cerrar el diálogo, volvemos a cargar el listado de categorías llamando a ngOnInit()
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];
  durationInSeconds=5;

  // Inyectamos el servicio (lo definimos dentro del constructor)
  constructor(
    private categoryService: CategoryService,
    // Nos permite abrir un componente dentro de un diálogo si lo ponemos dentro del constructor
    public dialog: MatDialog,   
    private snackBar: MatSnackBar,
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

  // Método para editar las categorías
  editCategory(category: Category){
    const dialogRef=this.dialog.open(CategoryEditComponent, {
      // Pasamos el objeto con los datos rellenos para poder editarlos
      data: {category:category}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  deleteCategory(category: Category){
    const dialogRef=this.dialog.open(DialogConfirmationComponent, {
      // Definimos los datos que le vamos a pasar al componente del diálogo
      data: {title: "Eliminar categoría", 
        description: "Atención si borra la categoría se perderán sus datos. <br> ¿Desea eliminar la categoría?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      // Si se ha pulsado "sí", devuelve true y entonces se llama al servicio de eliminar, pasándole
      // el identificador del objeto a eliminar para que sólo se elimine ese objeto
      if (result){
        // Con .subscribe() le decimos que cuando acabe la eliminación, se ejecute ngOnInit()
        this.categoryService.deleteCategory(category.id).subscribe(result => {
          this.ngOnInit();
        }, res=>{
          this.showError(res);
        });
      }
    });
  }

  showError(res: any){
    this.openSnackBar('No se puede eliminar esta categoría porque tiene juegos asociados.')
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
        duration: this.durationInSeconds*1000,
    });
  }
}

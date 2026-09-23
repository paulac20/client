import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  category! : Category;

  constructor(
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    //Recibimos datos en un componente que está dentro de un diálogo, en este caso para el diálogo de editar
    @Inject(MAT_DIALOG_DATA) public data: any,  
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    // Si me han pasado datos de una categoría, mostramos los datos en el dialogo para poder editar
    if(this.data.category!=null){
      // Lo que modifiquemos en el formulario se refresca directamente en la pantalla
      //this.category=this.data.category;

      // Creamos una copia del objeto para que el formulario y el listado (la tabla) usen objetos
      // diferentes y a esta copia le añadimos una copia del dato para que las modificaciones no 
      // se refresquen directamente en la pantalla (en el listado)
      this.category = Object.assign({}, this.data.category);
    }
    // Si no me pasan datos (data está vacío), es porque se quiere crear una nueva categoría
    else{
      this.category = new Category();
    }
  }

  // Método para conectar con el servidor
  onSave() {
    this.categoryService.saveCategory(this.category).subscribe(result => {
      this.dialogRef.close();
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }

}

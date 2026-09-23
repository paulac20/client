import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  //Inyectamos el servicio (lo definimos dentro del constructor)
  constructor(private categoryService: CategoryService,) { }

  //Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    //LLamamos al método getCateories() y le decimos que cuando emita la lista de categorías, queremos recibirlas en la tabla para mostrarlas
    this.categoryService.getCategories().subscribe(categories => this.dataSource.data = categories);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.category = new Category();
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

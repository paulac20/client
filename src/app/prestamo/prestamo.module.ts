import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';



@NgModule({
  declarations: [
    PrestamoListComponent,
    PrestamoEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamoModule { }

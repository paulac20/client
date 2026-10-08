import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PrestamoListComponent,
    PrestamoEditComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
    { provide: MAT_DATE_LOCALE, 
      useValue: 'es-ES' 
    }
  ]
})
export class PrestamoModule { }

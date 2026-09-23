import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';




@NgModule({
  declarations: [   //Declaramos los componentes
    HeaderComponent, DialogConfirmationComponent
  ],
  imports: [      //Importamos los módulos
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    }
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [   //Declaramos los componentes
    HeaderComponent
  ],
  imports: [      //Importamos los módulos
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }

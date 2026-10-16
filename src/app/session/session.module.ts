import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionSigninComponent } from './session-signin/session-signin.component';
import { SessionRegisterComponent } from './session-register/session-register.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SessionSigninComponent,
    SessionRegisterComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SessionModule { }

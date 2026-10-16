import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionSigninComponent } from './session-signin/session-signin.component';
import { SessionRegisterComponent } from './session-register/session-register.component';



@NgModule({
  declarations: [
    SessionSigninComponent,
    SessionRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usser } from '../model/Usser';

@Component({
  selector: 'app-session-register',
  templateUrl: './session-register.component.html',
  styleUrls: ['./session-register.component.scss']
})
export class SessionRegisterComponent implements OnInit{

  @ViewChild('passwordField') passwordField!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordField2') passwordField2!: ElementRef<HTMLInputElement>;
  @ViewChild('mail') mail!: ElementRef<HTMLInputElement>;
  passwordError!: String;
  usser: Usser = new Usser();

  constructor(
    private dialogRef: MatDialogRef<SessionRegisterComponent>
  ){}

  ngOnInit(): void {
    
  }

  register(){

  }

  onClose(){
    this.dialogRef.close();
  }

  passwordVisibility(){
    const field = this.passwordField.nativeElement;

    if(field.type === 'password'){
      field.type = 'text';
    } else {
      field.type = 'password';
    }
  }

  passwordVisibilityRep(){
    const field2 = this.passwordField2.nativeElement;

    if(field2.type === 'password'){
      field2.type = 'text';
    } else {
      field2.type = 'password';
    }
  }

  showError(){
    const field = this.passwordField.nativeElement.value;
    const field2 = this.passwordField2.nativeElement.value;

    if(field!= field2){
      this.passwordError = 'Las contraseñas no coinciden.';
    } else {
      this.passwordError = '';
    }

    if(field2 == ''){
      this.passwordError = '';
    }
  }

}

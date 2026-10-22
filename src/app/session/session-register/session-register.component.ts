import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usser } from '../model/Usser';
import { SessionService } from '../session.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-session-register',
  templateUrl: './session-register.component.html',
  styleUrls: ['./session-register.component.scss']
})
export class SessionRegisterComponent implements OnInit{

  @ViewChild('passwordField') passwordField!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordField2') passwordField2!: ElementRef<HTMLInputElement>;
  @ViewChild('email') email!: ElementRef<HTMLInputElement>;
  passwordError!: String;
  usserError!: String;
  usser!: Usser;
  durationInSeconds=5;

  constructor(
    private dialogRef: MatDialogRef<SessionRegisterComponent>,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    this.usser= new Usser();
  }

  register(){
    this.sessionService.register(this.usser).subscribe(result=>{
      this.dialogRef.close();
      this.openSnackBar('Se ha registrado correctamente.')
    }, res=>{
      this.validateExistsUsser(res);
    });
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

  validateExistsUsser(res: HttpErrorResponse){
    if(res.error === "EXISTS_USSER"){
      this.usserError= 'Este usuario ya está en uso.';
    } else {
      this.usserError= '';
    }
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
      duration: this.durationInSeconds*1000,
    });
  }

}

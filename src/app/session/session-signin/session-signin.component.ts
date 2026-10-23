import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SessionRegisterComponent } from '../session-register/session-register.component';
import { SessionService } from '../session.service';
import { Login } from '../model/Login';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-session-signin',
  templateUrl: './session-signin.component.html',
  styleUrls: ['./session-signin.component.scss']
})
export class SessionSigninComponent implements OnInit{

  login!: Login;
  loginError!: String;
  durationInSeconds=5;

  @ViewChild('passwordField') passwordField!: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<SessionSigninComponent>,
    private dialog: MatDialog,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    this.login= new Login();
  }

  signIn(){
    this.sessionService.login(this.login).subscribe(result=>{
      localStorage.setItem('authenticated', 'true');
      this.dialogRef.close();
      this.openSnackBar('Se ha iniciado sesión correctamente.')
    }, res => {
      this.showError(res);
    })
  }

  register(){
    const dialogRefe=this.dialog.open(SessionRegisterComponent)
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

  showError(res: HttpErrorResponse){
    if(res.error === 'INCORRECT_LOGIN'){
      this.loginError= 'Usuario o contraseña incorrecto.'
    } else{
      this.loginError='';
    }
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
      duration: this.durationInSeconds*1000,
    });
  }

}

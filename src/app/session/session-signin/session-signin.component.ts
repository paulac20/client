import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SessionRegisterComponent } from '../session-register/session-register.component';

@Component({
  selector: 'app-session-signin',
  templateUrl: './session-signin.component.html',
  styleUrls: ['./session-signin.component.scss']
})
export class SessionSigninComponent implements OnInit{

  @ViewChild('passwordField') passwordField!: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<SessionSigninComponent>,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    
  }

  signIn(){
    
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

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SessionRegisterComponent } from '../session-register/session-register.component';

@Component({
  selector: 'app-session-signin',
  templateUrl: './session-signin.component.html',
  styleUrls: ['./session-signin.component.scss']
})
export class SessionSigninComponent implements OnInit{

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

}

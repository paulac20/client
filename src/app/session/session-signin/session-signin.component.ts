import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-session-signin',
  templateUrl: './session-signin.component.html',
  styleUrls: ['./session-signin.component.scss']
})
export class SessionSigninComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<SessionSigninComponent>,
  ){}

  ngOnInit(): void {
    
  }

  signIn(){
    
  }

  register(){

  }

  onClose(){
    this.dialogRef.close();
  }

}

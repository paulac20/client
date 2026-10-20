import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-session-register',
  templateUrl: './session-register.component.html',
  styleUrls: ['./session-register.component.scss']
})
export class SessionRegisterComponent implements OnInit{

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

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionSigninComponent } from 'src/app/session/session-signin/session-signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private dialog: MatDialog
  ){}

  signIn(){
    const dialogRef=this.dialog.open(SessionSigninComponent)
  }

}

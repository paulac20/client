import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionSigninComponent } from 'src/app/session/session-signin/session-signin.component';
import { SessionService } from 'src/app/session/session.service';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private dialog: MatDialog,
    public sessionService: SessionService
  ){}

  signIn(){
    const dialogRef=this.dialog.open(SessionSigninComponent)
  }

  logout(){
    const dialogRef =  this.dialog.open(DialogConfirmationComponent, {
      data: {title: "Cerrar sesión", description: "¿Quieres cerrar sesión?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        localStorage.setItem('authenticated', 'false');
      }
    });
  }

}

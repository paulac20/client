import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit{

  dataSource = new MatTableDataSource<Client>();
  displayColumns: string[] = ['id', 'name', 'action'];
  durationInSeconds=5;

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.dataSource.data = clients);
  }

  createClient(){
    const dialogRef= this.dialog.open(ClientEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  editClient(client: Client){
    const dialogRef= this.dialog.open(ClientEditComponent, {
      data: {client:client}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  deleteClient(client: Client){
    const dialogRef= this.dialog.open(DialogConfirmationComponent, {
      data: {title: "Eliminar categoría", 
        description: "Atención si borra la categoría se perderán sus datos. <br> ¿Desea eliminar la categoría?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.clientService.deleteClient(client.id).subscribe(result => {
          this.ngOnInit();
        }, res=>{
          this.showError(res);
        });
      }
    });
  }

  showError(res: any){
    this.openSnackBar('No se puede eliminar este cliente porque tiene préstamos asociados.')
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
        duration: this.durationInSeconds*1000,
    });
  }
}

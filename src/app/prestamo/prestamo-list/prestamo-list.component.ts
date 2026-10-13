import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/client/client.service';
import { Client } from 'src/app/client/model/Client';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { PrestamoEditComponent } from '../prestamo-edit/prestamo-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { Prestamo } from '../model/Prestamo';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { PrestamoService } from '../prestamo.service';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListComponent implements OnInit{
    games!: Game[];
    clients!: Client[];
    filterTitle: Game | null = null;
    filterClient: Client | null = null;
    filterDate: Date | null = null;
    pageNumber: number=0;
    pageSize: number = 5;
    totalElements: number = 0;

    dataSource = new MatTableDataSource<Prestamo>();
    displayedColumns: string[] = ['id', 'game', 'client', 'dateIni', 'dateFin', 'action'];

    constructor(
      private prestamoService: PrestamoService,
      private gameService: GameService,
      private clientService: ClientService,
      public dialog: MatDialog
    ){}

    ngOnInit(): void {
      this.loadPage();

      this.gameService.getGames().subscribe(
        games => this.games = games
      );

      this.clientService.getClients().subscribe(
        clients => this.clients= clients
      );
    }

    loadPage(event?: PageEvent){
      let pageable: Pageable = {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: [{
          property: 'id',
          direction: 'ASC'
        }]
      }

      if(event != null){
        pageable.pageSize = event.pageSize;
        pageable.pageNumber = event.pageIndex;
      }

      const gameId = this.filterTitle != null ? this.filterTitle.id : undefined;
      const clientId = this.filterClient != null ? this.filterClient.id : undefined;
      const date = this.filterDate ? this.filterDate.toLocaleDateString('en-CA') : undefined;

      this.prestamoService.getPrestamos(pageable, gameId, clientId, date).subscribe(data => {
        this.dataSource.data = data.content;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
      });
    }

    onCleanFilter(): void {
      this.filterTitle = null;
      this.filterClient = null;
      this.filterDate = null;

      this.onSearch();
    }

    onSearch(): void{
      this.pageNumber=0;
      this.loadPage();
    }

    createPrestamo(){
      const dialogRef = this.dialog.open(PrestamoEditComponent, {
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }

    editPrestamo(prestamo: Prestamo){
      const dialogRef = this.dialog.open(PrestamoEditComponent, {
        data: { prestamo: prestamo }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }

    deletePrestamo(prestamo: Prestamo){
      const dialogRef = this.dialog.open(DialogConfirmationComponent, {
        data: { title: "Eliminar autor", description: "Atención si borra el autor se perderán sus datos.<br> ¿Desea eliminar el autor?" }
      });
      
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.prestamoService.deletePrestamo(prestamo.id).subscribe(result =>  {
            this.ngOnInit();
          }); 
        }
      });
    }
}

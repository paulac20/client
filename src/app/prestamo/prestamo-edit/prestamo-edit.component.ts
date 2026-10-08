import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/client/model/Client';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { PrestamoService } from '../prestamo.service';
import { ClientService } from 'src/app/client/client.service';
import { Prestamo } from '../model/Prestamo';

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.scss']
})
export class PrestamoEditComponent implements OnInit {

  prestamo!: Prestamo;
  games!: Game[];
  clients!: Client[];

  constructor(
    public dialogRef: MatDialogRef<PrestamoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private prestamoService: PrestamoService,
    private gameService: GameService,
    private clientService: ClientService,
  ){}

  ngOnInit(): void {
    this.prestamo= new Prestamo();
    
    this.gameService.getGames().subscribe(
      games => {
        this.games = games;

        if (this.prestamo.game!=null){
          let gameFilter: Game[] = this.games.filter(game => game.id == this.data.prestamo.game.id);
          if (gameFilter != null){
            this.prestamo.game = gameFilter[0];
          }
        }
      }
    );

    
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;

        if (this.prestamo.client!=null){
          let clientFilter: Client[] = this.clients.filter(client => client.id == this.data.prestamo.client.id);
          if (clientFilter != null){
            this.prestamo.client = clientFilter[0];
          }
        }
      }
    );
  }

  onSave() {
    this.prestamoService.savePrestamo(this.prestamo).subscribe(result => {
        this.dialogRef.close();
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }
}

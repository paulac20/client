import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/client/model/Client';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { PrestamoService } from '../prestamo.service';
import { ClientService } from 'src/app/client/client.service';
import { Prestamo } from '../model/Prestamo';
import { HttpErrorResponse } from '@angular/common/http';

const maxDaysPrestamo=14;

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.scss']
})
export class PrestamoEditComponent implements OnInit {

  prestamo!: Prestamo;
  games!: Game[];
  clients!: Client[];
  requestFailed!: boolean;
  errorClient!: String;
  errorGame!: String;
  errorLongDays!: String;
  errorDateFin!: String;
  minFin!: Date;
  maxFin!: Date;
  minIni!: Date;
  maxIni!: Date;

  constructor(
    public dialogRef: MatDialogRef<PrestamoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private prestamoService: PrestamoService,
    private gameService: GameService,
    private clientService: ClientService,
  ){}

  ngOnInit(): void {
    if(this.data.prestamo!=null){
      this.prestamo = Object.assign({}, this.data.prestamo);
    } else{
      this.prestamo= new Prestamo();
    }
    
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

    this.dateMinMaxValidation();
  }

  onSave() {
    const prestamoToSave={
      ...this.prestamo,
      dateIni: this.formatLocalDate(this.prestamo.dateIni as any),
      dateFin: this.formatLocalDate(this.prestamo.dateFin as any)
    }
    this.prestamoService.savePrestamo(prestamoToSave).subscribe(result => {
        this.dialogRef.close();
    }, res=>{
      this.requestFailed=true;
      this.showError(res);
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  private formatLocalDate(date: any): string {
    const d = date instanceof Date ? date : new Date(date);

    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  showError(res: HttpErrorResponse){
    if(res.error === "CLIENT_ALREADY_HAS_PRESTAMO"){
      this.deleteErrors();
      this.errorClient='Este cliente ya tiene un préstamo para estas fechas.'
    }
    if (res.error === "GAME_ALREADY_PRESTADO"){
      this.deleteErrors();
      this.errorGame='Este juego ya está prestado para estas fechas.'
    }    
    if (res.error === "END_DATE_HAS_TO_BE_AFTER"){
      this.deleteErrors();
      this.errorDateFin= 'La fecha de devolución no puede ser antes que la de préstamo.'
    }
    if (res.error=== "ONLY_14_DAYS"){
      this.deleteErrors();
      this.errorLongDays= 'El préstamo no puede durar más de 14 días.'
    }
  }    

  deleteErrors(){
    this.errorClient='';
    this.errorDateFin='';
    this.errorGame='';
    this.errorLongDays='';
  }

  dateMinMaxValidation(){
    this.minFin= new Date(String(this.prestamo.dateIni));
    this.maxFin= new Date(String(this.prestamo.dateIni));
    this.maxFin.setDate(this.maxFin.getDate() + maxDaysPrestamo);

    this.maxIni= new Date(String(this.prestamo.dateFin));
    this.minIni= new Date(String(this.prestamo.dateFin));
    this.minIni.setDate(this.minIni.getDate() - maxDaysPrestamo);
  }
}

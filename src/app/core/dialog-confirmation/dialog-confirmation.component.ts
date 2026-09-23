import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {

  title! : string;
  description! : string;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    // Para recibir datos en un componente dentro de un diálogo, en este caso para poder recibir 
    // datos del título y la descripción
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Pasamos el título del dato a la variable para mostrarlo en el cuadro de diálogo.
    // Igual con la descripción.
    this.title = this.data.title;
    this.description = this.data.description;
  }

  onYes() {
    // Si selecciona el botón de "sí", se cierra el diálogo y devuelve true al componente que abrió la ventana
    this.dialogRef.close(true);
  }

  onNo() {
    // Lo mismo que si selecciona "si", pero devuelve al componente false
    this.dialogRef.close(false);
  }
}

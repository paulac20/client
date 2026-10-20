import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit{

  client!: Client
  error!: String
  requestFailed!: boolean

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService
  ){ }

  ngOnInit(): void {
    if(this.data.client!=null){
      this.client = Object.assign({}, this.data.client);
    }
    else{
      this.client=new Client();
    }
  }

  onSave(){
    this.clientService.saveClient(this.client).subscribe(result => {
      this.dialogRef.close();
    }, res=>{
      this.requestFailed=true;
      this.showError(res);
    });
  }

  showError(res: HttpErrorResponse){
    this.error='Ya existe un cliente con ese nombre.'
  }

  onClose(){
    this.dialogRef.close();
  }
}
 
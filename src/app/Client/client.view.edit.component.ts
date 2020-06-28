import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {ClientService} from './client.service';
import {ClientDto} from './ClientDto';

@Component({
    selector: 'clients-view-edit',
    templateUrl: './client.view.edit.component.html',
    styleUrls: ['./client.view.edit.component.css'],
    providers: [ClientDto, ClientService, GenericServices]
})
export class ClientViewEditComponent{

    columns : Array<string>;
    clients: Set<ClientDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private clientDto: ClientDto, private clientService: ClientService) {
        this.columns = ["Select"];
        this.getAllClientsClicked();
        this.editMode = false;
    }

    getAllClientsClicked() {
        this.clientService.getAllClients().subscribe(
          result => {
            if(result != null) {
              this.clients = result;
              console.log("All Clients : " + JSON.stringify(result));
            }
          },
          error => console.log(error)
        )
    }

    editClicked(clientId) {
        this.selectedRowId = clientId;
    }

    updateClientClicked(clientId, client) {
        this.clientService.updateClient(clientId, client).subscribe(
          result => {
            if(result != null) {
              console.log("Client : " + JSON.stringify(result));
              console.log("Client Object: " + JSON.stringify(result));
              console.log("Client Id: " + clientId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

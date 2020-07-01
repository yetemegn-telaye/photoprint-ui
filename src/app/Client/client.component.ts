import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ClientService} from './client.service';
import {ClientDto} from './ClientDto';
import { UserService } from '../User/user.service';



@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    providers: [ClientDto, ClientService, UserService, GenericServices ]
})
export class ClientComponent {

    error: string;
    result:Array<Object>;
    selectedClientId: string;
    clients: Array<Object>;
    client: Object;
    saveOrUpdate : String = "Save";
    users: Array<Object>;
    

    constructor(private router: Router, private clientDto: ClientDto, private clientService: ClientService, private userService: UserService, private genericServices: GenericServices ) {
          if(ClientService.selectedClient != undefined || ClientService.selectedClient != null){
            this.clientDto = ClientService.selectedClient;
            //this.clientDto.{1} = ClientService.selectedClient.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllUsers();
    }
    
    createClientClicked() {
      this.clientService.createClient(this.clientDto).subscribe(
          result => {
            if(result != null)
              console.log("Client Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateClientClicked() {
      this.clientService.updateClient(this.selectedClientId, this.clientDto).subscribe(
        result => {
          if(result != null) {
              this.client = result;
              console.log("Client : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteClientClicked() {
      this.clientService.deleteClient(this.selectedClientId);
    }

    getClientClicked() {
      this.clientService.getClient(this.selectedClientId).subscribe(
        result => {
          if(result != null) {
              this.client = result;
              console.log("Client : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
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

    getAllUsers() {
      this.userService.getAllUsers().subscribe(
        result => {
          if(result != null) {
            this.users = result;
            console.log("All Shops : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    selectuser(user) {
      console.log("Selected Shop: " + JSON.stringify(shop));
      this.clientDto.user = user;
      console.log(JSON.stringify(this.addressDto));
    }
    
    
}

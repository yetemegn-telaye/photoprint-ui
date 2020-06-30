import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ClientService} from './client.service';
import {ClientDto} from './ClientDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'clients-view',
    templateUrl: './client.view.component.html',
    styleUrls: ['./client.view.component.css'],
    providers: [ClientDto, ClientService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class ClientViewComponent{

    columns : Array<string>;
    clients: Array<ClientDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private clientDto: ClientDto, private clientService: ClientService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"lastName"
,"contact"
,"user"
,"firstName"
,"middleName"
];
        this.getAllClientsClicked();
    }

    getAllClientsClicked() {
        this.clientService.getAllClients().subscribe(
          result => {
            if(result != null) {
              this.clients = result;
              console.log("All Client : " + JSON.stringify(result));
            }
          }
        )
    }

    isNotPrimitive(property) {
        if (property)
            return typeof property === 'object';
        return false;
    }

    isBoolean(property) {
      if(property !== undefined || property !== null)
        return typeof property === 'boolean';
      return false;
    }

    selectAll() {
       this.clients.forEach( client => {
           if(this.selectAllValue) {
             client.selected = true;
           } else {
             client.selected = false;
           }
       });
     }

    deleteClients() {
      if(this.clients.filter(client => client.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.clients.forEach(client => {
            if(client.selected) {
               this.clientService.deleteClient(client.clientId).subscribe(
                 result => {
                   console.log("Client Deleted ! Id: " + client.clientId );
                 }
               );
            }
          })
        }
      }).catch(() => {
             console.log('Delete Dialog: User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
             return new Observable;
      });
    }

     editClient() {
          var selectedCount = this.clients.filter(client => client.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : ClientDto =  this.clients.filter(client => client.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          ClientService.selectedClient = selectedItem;

          this.router.navigate(['/clients']);
     }
}

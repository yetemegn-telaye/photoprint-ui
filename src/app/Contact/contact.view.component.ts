import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ContactService} from './contact.service';
import {ContactDto} from './ContactDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'contacts-view',
    templateUrl: './contact.view.component.html',
    styleUrls: ['./contact.view.component.css'],
    providers: [ContactDto, ContactService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class ContactViewComponent{

    columns : Array<string>;
    contacts: Array<ContactDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private contactDto: ContactDto, private contactService: ContactService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"phoneNumber"
,"client"
,"shop"
,"emailAddress"
];
        this.getAllContactsClicked();
    }

    getAllContactsClicked() {
        this.contactService.getAllContacts().subscribe(
          result => {
            if(result != null) {
              this.contacts = result;
              console.log("All Contact : " + JSON.stringify(result));
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
       this.contacts.forEach( contact => {
           if(this.selectAllValue) {
             contact.selected = true;
           } else {
             contact.selected = false;
           }
       });
     }

    deleteContacts() {
      if(this.contacts.filter(contact => contact.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.contacts.forEach(contact => {
            if(contact.selected) {
               this.contactService.deleteContact(contact.contactId).subscribe(
                 result => {
                   console.log("Contact Deleted ! Id: " + contact.contactId );
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

     editContact() {
          var selectedCount = this.contacts.filter(contact => contact.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : ContactDto =  this.contacts.filter(contact => contact.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          ContactService.selectedContact = selectedItem;

          this.router.navigate(['/contacts']);
     }
}

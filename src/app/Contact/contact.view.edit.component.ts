import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {ContactService} from './contact.service';
import {ContactDto} from './ContactDto';

@Component({
    selector: 'contacts-view-edit',
    templateUrl: './contact.view.edit.component.html',
    styleUrls: ['./contact.view.edit.component.css'],
    providers: [ContactDto, ContactService, GenericServices]
})
export class ContactViewEditComponent{

    columns : Array<string>;
    contacts: Set<ContactDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private contactDto: ContactDto, private contactService: ContactService) {
        this.columns = ["Select"];
        this.getAllContactsClicked();
        this.editMode = false;
    }

    getAllContactsClicked() {
        this.contactService.getAllContacts().subscribe(
          result => {
            if(result != null) {
              this.contacts = result;
              console.log("All Contacts : " + JSON.stringify(result));
            }
          },
          error => console.log(error)
        )
    }

    editClicked(contactId) {
        this.selectedRowId = contactId;
    }

    updateContactClicked(contactId, contact) {
        this.contactService.updateContact(contactId, contact).subscribe(
          result => {
            if(result != null) {
              console.log("Contact : " + JSON.stringify(result));
              console.log("Contact Object: " + JSON.stringify(result));
              console.log("Contact Id: " + contactId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

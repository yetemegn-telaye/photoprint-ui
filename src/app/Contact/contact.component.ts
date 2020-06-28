import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ContactService} from './contact.service';
import {ContactDto} from './ContactDto';



@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    providers: [ContactDto, ContactService, GenericServices ]
})
export class ContactComponent {

    error: string;
    result:Array<Object>;
    selectedContactId: string;
    contacts: Array<Object>;
    contact: Object;
    saveOrUpdate : String = "Save";
    
    

    constructor(private router: Router, private contactDto: ContactDto, private contactService: ContactService, private genericServices: GenericServices ) {
          if(ContactService.selectedContact != undefined || ContactService.selectedContact != null){
            this.contactDto = ContactService.selectedContact;
            //this.contactDto.{1} = ContactService.selectedContact.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      
    }
    
    createContactClicked() {
      this.contactService.createContact(this.contactDto).subscribe(
          result => {
            if(result != null)
              console.log("Contact Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateContactClicked() {
      this.contactService.updateContact(this.selectedContactId, this.contactDto).subscribe(
        result => {
          if(result != null) {
              this.contact = result;
              console.log("Contact : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteContactClicked() {
      this.contactService.deleteContact(this.selectedContactId);
    }

    getContactClicked() {
      this.contactService.getContact(this.selectedContactId).subscribe(
        result => {
          if(result != null) {
              this.contact = result;
              console.log("Contact : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
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

    
    
}

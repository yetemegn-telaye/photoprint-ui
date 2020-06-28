import {Injectable} from '@angular/core';
import { ContactDto } from './ContactDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class ContactService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "contacts";
  public static selectedContact: ContactDto;
  public static selectedContacts: Set<ContactDto>;

  constructor(private genericServices: GenericServices) {

  }

  createContact(contactDto : ContactDto) {
    var url = ContactService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, contactDto, GenericServices.POST_METHOD);
  }

  updateContact(contactId: string, contactDto: ContactDto) {
    var url = ContactService.CONTROLLER_PATH + "/" + contactId;
    return this.genericServices.httpService(url, contactDto, GenericServices.PUT_METHOD);
  }

  deleteContact(contactId: string) {
    var url = ContactService.CONTROLLER_PATH + "/" + contactId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getContact(contactId: string) {
    var url = ContactService.CONTROLLER_PATH + "/" + contactId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllContacts() {
    return this.genericServices.httpService(ContactService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

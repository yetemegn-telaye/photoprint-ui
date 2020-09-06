export class ContactDto {
    selected : boolean;
    contactId : string;
    emailAddress : string;
    phoneNumber : string;


    toString() {
      return JSON.stringify(this);
    }
}

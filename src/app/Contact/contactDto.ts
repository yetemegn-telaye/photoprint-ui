export class ContactDto {
    selected : boolean;
    contactId : string;
    	phoneNumber : string;
	client : any;
	shop : any;
	emailAddress : string;


    toString() {
      return JSON.stringify(this);
    }
}

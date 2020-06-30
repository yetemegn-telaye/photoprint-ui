export class ContactDto {
    selected : boolean;
    contactId : string;
    	client : any;
	emailAddress : string;
	phoneNumber : string;
	shop : any;


    toString() {
      return JSON.stringify(this);
    }
}

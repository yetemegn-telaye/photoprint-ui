export class ClientDto {
    selected : boolean;
    clientId : string;
    	lastName : string;
	contact : any;
	orders : Set<any>;
	addresss : Set<any>;
	user : any;
	firstName : string;
	middleName : string;
	imageInfos : Set<any>;


    toString() {
      return JSON.stringify(this);
    }
}

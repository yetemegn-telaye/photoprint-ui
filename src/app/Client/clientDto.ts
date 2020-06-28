export class ClientDto {
    selected : boolean;
    clientId : string;
    	contact : any;
	lastName : string;
	user : any;
	orders : Set<any>;
	firstName : string;
	addresss : Set<any>;
	middleName : string;
	imageInfos : Set<any>;


    toString() {
      return JSON.stringify(this);
    }
}

export class AddressDto {
    selected : boolean;
    addressId : string;
    	woreda : number;
	shop : any;
	client : any;
	streetAddress : string;
	kebele : number;
	city : string;
	location : string;
	zipCode : number;
	country : string;


    toString() {
      return JSON.stringify(this);
    }
}

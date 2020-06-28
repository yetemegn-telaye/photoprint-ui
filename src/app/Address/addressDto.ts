export class AddressDto {
    selected : boolean;
    addressId : string;
    	kebele : number;
	city : string;
	country : string;
	streetAddress : string;
	zipCode : number;
	client : any;
	shop : any;
	woreda : number;
	location : string;


    toString() {
      return JSON.stringify(this);
    }
}

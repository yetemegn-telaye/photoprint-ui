export class UserDto {
    selected : boolean;
    userId : string;
    	client : any;
	userName : string;
	role : any;
	shops : Set<any>;
	password : string;


    toString() {
      return JSON.stringify(this);
    }
}

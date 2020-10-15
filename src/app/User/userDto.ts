export class UserDto {
    selected : boolean;
    userId : string;
    client : any;
    	role : any;
	userName : string;
	password : string;
	shops : Set<any>;


    toString() {
      return JSON.stringify(this);
    }
}

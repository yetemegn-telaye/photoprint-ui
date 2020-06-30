export class UserDto {
    selected : boolean;
    userId : string;
    	role : any;
	client : any;
	userName : string;
	password : string;
	shops : Set<any>;


    toString() {
      return JSON.stringify(this);
    }
}

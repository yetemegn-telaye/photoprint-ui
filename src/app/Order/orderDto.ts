export class OrderDto {
    selected : boolean;
    orderId : string;
    	status : any;
	imageInfos : Set<any>;
	date : Date;


    toString() {
      return JSON.stringify(this);
    }
}

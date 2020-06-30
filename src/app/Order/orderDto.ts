export class OrderDto {
    selected : boolean;
    orderId : string;
    	imageInfos : Set<any>;
	shop : any;
	orderDate : Date;
	orderStatus : any;
	client : any;


    toString() {
      return JSON.stringify(this);
    }
}

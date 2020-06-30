export class ShopDto {
    selected : boolean;
    shopId : string;
    	deliveryOpt : any;
	workingDays : string;
	workingHrEnd : any;
	contact : any;
	shopImgInfos : Set<any>;
	name : string;
	orders : Set<any>;
	user : any;
	workingHrStart : any;
	addresss : Set<any>;


    toString() {
      return JSON.stringify(this);
    }
}

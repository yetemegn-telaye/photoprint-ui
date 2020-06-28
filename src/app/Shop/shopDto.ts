export class ShopDto {
    selected : boolean;
    shopId : string;
    	workingDays : string;
	name : string;
	shopImgInfos : Set<any>;
	workingHrStart : any;
	orders : Set<any>;
	addresss : Set<any>;
	deliveryOpt : any;
	contact : any;
	workingHrEnd : any;


    toString() {
      return JSON.stringify(this);
    }
}

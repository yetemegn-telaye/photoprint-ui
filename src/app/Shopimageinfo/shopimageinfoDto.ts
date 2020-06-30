export class ShopimageinfoDto {
    selected : boolean;
    shopimageinfoId : string;
    	imageSize : any;
	shop : any;
	imagePrice : any;


    toString() {
      return JSON.stringify(this);
    }
}

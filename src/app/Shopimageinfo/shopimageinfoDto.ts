export class ShopimageinfoDto {
    selected : boolean;
    shopimageinfoId : string;
    	imagePrice : any;
	imageSize : any;
	shop : any;


    toString() {
      return JSON.stringify(this);
    }
}

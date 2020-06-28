export class ImageinfoDto {
    selected : boolean;
    imageinfoId : string;
    	imageSize : any;
	image : string;
	count : number;
	order : any;


    toString() {
      return JSON.stringify(this);
    }
}

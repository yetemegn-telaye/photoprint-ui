export class ImageinfoDto {
    selected : boolean;
    imageinfoId : string;
    	client : any;
	imageSize : any;
	order : any;
	image : string;
	count : number;


    toString() {
      return JSON.stringify(this);
    }
}

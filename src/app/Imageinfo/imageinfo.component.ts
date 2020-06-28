import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ImageinfoService} from './imageinfo.service';
import {ImageinfoDto} from './ImageinfoDto';
import { OrderService } from "../Order/order.service";



@Component({
    selector: 'imageinfo',
    templateUrl: './imageinfo.component.html',
    styleUrls: ['./imageinfo.component.css'],
    providers: [ImageinfoDto, ImageinfoService, GenericServices , OrderService
]
})
export class ImageinfoComponent {

    error: string;
    result:Array<Object>;
    selectedImageinfoId: string;
    imageinfos: Array<Object>;
    imageinfo: Object;
    saveOrUpdate : String = "Save";
    orders: Array<Object>;

    

    constructor(private router: Router, private imageinfoDto: ImageinfoDto, private imageinfoService: ImageinfoService, private genericServices: GenericServices , private orderService: OrderService
) {
          if(ImageinfoService.selectedImageinfo != undefined || ImageinfoService.selectedImageinfo != null){
            this.imageinfoDto = ImageinfoService.selectedImageinfo;
            //this.imageinfoDto.{1} = ImageinfoService.selectedImageinfo.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllOrders();

    }
    
    createImageinfoClicked() {
      this.imageinfoService.createImageinfo(this.imageinfoDto).subscribe(
          result => {
            if(result != null)
              console.log("Imageinfo Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateImageinfoClicked() {
      this.imageinfoService.updateImageinfo(this.selectedImageinfoId, this.imageinfoDto).subscribe(
        result => {
          if(result != null) {
              this.imageinfo = result;
              console.log("Imageinfo : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteImageinfoClicked() {
      this.imageinfoService.deleteImageinfo(this.selectedImageinfoId);
    }

    getImageinfoClicked() {
      this.imageinfoService.getImageinfo(this.selectedImageinfoId).subscribe(
        result => {
          if(result != null) {
              this.imageinfo = result;
              console.log("Imageinfo : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllImageinfosClicked() {
      this.imageinfoService.getAllImageinfos().subscribe(
        result => {
          if(result != null) {
            this.imageinfos = result;
            console.log("All Imageinfos : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllOrders() {
      this.orderService.getAllOrders().subscribe(
        result => {
          if(result != null) {
            this.orders = result;
            console.log("All Orders : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    selectorder(order) {
      console.log("Selected Order: " + JSON.stringify(order));
      this.imageinfoDto.order = order;
      console.log(JSON.stringify(this.imageinfoDto));
    }

    
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ImageinfoService} from './imageinfo.service';
import {ImageinfoDto} from './ImageinfoDto';
import { ClientService } from "../Client/client.service";
import { Imagesize } from "../Imagesize/imagesize"


@Component({
    selector: 'imageinfo',
    templateUrl: './imageinfo.component.html',
    styleUrls: ['./imageinfo.component.css'],
    providers: [ImageinfoDto, ImageinfoService, GenericServices , ClientService
]
})
export class ImageinfoComponent {

    error: string;
    result:Array<Object>;
    selectedImageinfoId: string;
    imageinfos: Array<Object>;
    imageinfo: Object;
    saveOrUpdate : String = "Save";
    clients: Array<Object>;
    imageSize = Imagesize;
    

    constructor(private router: Router, private imageinfoDto: ImageinfoDto, private imageinfoService: ImageinfoService, private genericServices: GenericServices , private clientService: ClientService
) {
          if(ImageinfoService.selectedImageinfo != undefined || ImageinfoService.selectedImageinfo != null){
            this.imageinfoDto = ImageinfoService.selectedImageinfo;
            //this.imageinfoDto.{1} = ImageinfoService.selectedImageinfo.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllClients();

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

    getAllClients() {
      this.clientService.getAllClients().subscribe(
        result => {
          if(result != null) {
            this.clients = result;
            console.log("All Clients : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    selectclient(client) {
      console.log("Selected Client: " + JSON.stringify(client));
      this.imageinfoDto.client = client;
      console.log(JSON.stringify(this.imageinfoDto));
    }

    selectimageSize(imageSize) {
      console.log("Selected ImageSize: " + JSON.stringify(imageSize));
      this.imageinfoDto.imageSize = imageSize;
      console.log(JSON.stringify(this.imageinfoDto));
    }
    
}

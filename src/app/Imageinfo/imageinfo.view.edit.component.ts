import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {ImageinfoService} from './imageinfo.service';
import {ImageinfoDto} from './ImageinfoDto';

@Component({
    selector: 'imageinfos-view-edit',
    templateUrl: './imageinfo.view.edit.component.html',
    styleUrls: ['./imageinfo.view.edit.component.css'],
    providers: [ImageinfoDto, ImageinfoService, GenericServices]
})
export class ImageinfoViewEditComponent{

    columns : Array<string>;
    imageinfos: Set<ImageinfoDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private imageinfoDto: ImageinfoDto, private imageinfoService: ImageinfoService) {
        this.columns = ["Select"];
        this.getAllImageinfosClicked();
        this.editMode = false;
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

    editClicked(imageinfoId) {
        this.selectedRowId = imageinfoId;
    }

    updateImageinfoClicked(imageinfoId, imageinfo) {
        this.imageinfoService.updateImageinfo(imageinfoId, imageinfo).subscribe(
          result => {
            if(result != null) {
              console.log("Imageinfo : " + JSON.stringify(result));
              console.log("Imageinfo Object: " + JSON.stringify(result));
              console.log("Imageinfo Id: " + imageinfoId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ImageinfoService} from './imageinfo.service';
import {ImageinfoDto} from './ImageinfoDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'imageinfos-view',
    templateUrl: './imageinfo.view.component.html',
    styleUrls: ['./imageinfo.view.component.css'],
    providers: [ImageinfoDto, ImageinfoService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class ImageinfoViewComponent{

    columns : Array<string>;
    imageinfos: Array<ImageinfoDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private imageinfoDto: ImageinfoDto, private imageinfoService: ImageinfoService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"imageSize"
,"image"
,"count"
,"order"
];
        this.getAllImageinfosClicked();
    }

    getAllImageinfosClicked() {
        this.imageinfoService.getAllImageinfos().subscribe(
          result => {
            if(result != null) {
              this.imageinfos = result;
              console.log("All Imageinfo : " + JSON.stringify(result));
            }
          }
        )
    }

    isNotPrimitive(property) {
        if (property)
            return typeof property === 'object';
        return false;
    }

    isBoolean(property) {
      if(property !== undefined || property !== null)
        return typeof property === 'boolean';
      return false;
    }

    selectAll() {
       this.imageinfos.forEach( imageinfo => {
           if(this.selectAllValue) {
             imageinfo.selected = true;
           } else {
             imageinfo.selected = false;
           }
       });
     }

    deleteImageinfos() {
      if(this.imageinfos.filter(imageinfo => imageinfo.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.imageinfos.forEach(imageinfo => {
            if(imageinfo.selected) {
               this.imageinfoService.deleteImageinfo(imageinfo.imageinfoId).subscribe(
                 result => {
                   console.log("Imageinfo Deleted ! Id: " + imageinfo.imageinfoId );
                 }
               );
            }
          })
        }
      }).catch(() => {
             console.log('Delete Dialog: User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
             return new Observable;
      });
    }

     editImageinfo() {
          var selectedCount = this.imageinfos.filter(imageinfo => imageinfo.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : ImageinfoDto =  this.imageinfos.filter(imageinfo => imageinfo.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          ImageinfoService.selectedImageinfo = selectedItem;

          this.router.navigate(['/imageinfos']);
     }
}

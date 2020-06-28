import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ShopimageinfoService} from './shopimageinfo.service';
import {ShopimageinfoDto} from './ShopimageinfoDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'shopimageinfos-view',
    templateUrl: './shopimageinfo.view.component.html',
    styleUrls: ['./shopimageinfo.view.component.css'],
    providers: [ShopimageinfoDto, ShopimageinfoService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class ShopimageinfoViewComponent{

    columns : Array<string>;
    shopimageinfos: Array<ShopimageinfoDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private shopimageinfoDto: ShopimageinfoDto, private shopimageinfoService: ShopimageinfoService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"imagePrice"
,"imageSize"
,"shop"
];
        this.getAllShopimageinfosClicked();
    }

    getAllShopimageinfosClicked() {
        this.shopimageinfoService.getAllShopimageinfos().subscribe(
          result => {
            if(result != null) {
              this.shopimageinfos = result;
              console.log("All Shopimageinfo : " + JSON.stringify(result));
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
       this.shopimageinfos.forEach( shopimageinfo => {
           if(this.selectAllValue) {
             shopimageinfo.selected = true;
           } else {
             shopimageinfo.selected = false;
           }
       });
     }

    deleteShopimageinfos() {
      if(this.shopimageinfos.filter(shopimageinfo => shopimageinfo.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.shopimageinfos.forEach(shopimageinfo => {
            if(shopimageinfo.selected) {
               this.shopimageinfoService.deleteShopimageinfo(shopimageinfo.shopimageinfoId).subscribe(
                 result => {
                   console.log("Shopimageinfo Deleted ! Id: " + shopimageinfo.shopimageinfoId );
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

     editShopimageinfo() {
          var selectedCount = this.shopimageinfos.filter(shopimageinfo => shopimageinfo.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : ShopimageinfoDto =  this.shopimageinfos.filter(shopimageinfo => shopimageinfo.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          ShopimageinfoService.selectedShopimageinfo = selectedItem;

          this.router.navigate(['/shopimageinfos']);
     }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ShopService} from './shop.service';
import {ShopDto} from './ShopDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'shops-view',
    templateUrl: './shop.view.component.html',
    styleUrls: ['./shop.view.component.css'],
    providers: [ShopDto, ShopService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class ShopViewComponent{

    columns : Array<string>;
    shops: Array<ShopDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private shopDto: ShopDto, private shopService: ShopService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"workingDays"
,"name"
,"workingHrStart"
,"deliveryOpt"
,"contact"
,"workingHrEnd"
];
        this.getAllShopsClicked();
    }

    getAllShopsClicked() {
        this.shopService.getAllShops().subscribe(
          result => {
            if(result != null) {
              this.shops = result;
              console.log("All Shop : " + JSON.stringify(result));
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
       this.shops.forEach( shop => {
           if(this.selectAllValue) {
             shop.selected = true;
           } else {
             shop.selected = false;
           }
       });
     }

    deleteShops() {
      if(this.shops.filter(shop => shop.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.shops.forEach(shop => {
            if(shop.selected) {
               this.shopService.deleteShop(shop.shopId).subscribe(
                 result => {
                   console.log("Shop Deleted ! Id: " + shop.shopId );
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

     editShop() {
          var selectedCount = this.shops.filter(shop => shop.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : ShopDto =  this.shops.filter(shop => shop.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          ShopService.selectedShop = selectedItem;

          this.router.navigate(['/shops']);
     }
}

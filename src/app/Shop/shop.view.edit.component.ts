import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {ShopService} from './shop.service';
import {ShopDto} from './ShopDto';

@Component({
    selector: 'shops-view-edit',
    templateUrl: './shop.view.edit.component.html',
    styleUrls: ['./shop.view.edit.component.css'],
    providers: [ShopDto, ShopService, GenericServices]
})
export class ShopViewEditComponent{

    columns : Array<string>;
    shops: Set<ShopDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private shopDto: ShopDto, private shopService: ShopService) {
        this.columns = ["Select"];
        this.getAllShopsClicked();
        this.editMode = false;
    }

    getAllShopsClicked() {
        this.shopService.getAllShops().subscribe(
          result => {
            if(result != null) {
              this.shops = result;
              console.log("All Shops : " + JSON.stringify(result));
            }
          },
          error => console.log(error)
        )
    }

    editClicked(shopId) {
        this.selectedRowId = shopId;
    }

    updateShopClicked(shopId, shop) {
        this.shopService.updateShop(shopId, shop).subscribe(
          result => {
            if(result != null) {
              console.log("Shop : " + JSON.stringify(result));
              console.log("Shop Object: " + JSON.stringify(result));
              console.log("Shop Id: " + shopId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

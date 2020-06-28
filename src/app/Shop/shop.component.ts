import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ShopService} from './shop.service';
import {ShopDto} from './ShopDto';



@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
    providers: [ShopDto, ShopService, GenericServices ]
})
export class ShopComponent {

    error: string;
    result:Array<Object>;
    selectedShopId: string;
    shops: Array<Object>;
    shop: Object;
    saveOrUpdate : String = "Save";
    
    

    constructor(private router: Router, private shopDto: ShopDto, private shopService: ShopService, private genericServices: GenericServices ) {
          if(ShopService.selectedShop != undefined || ShopService.selectedShop != null){
            this.shopDto = ShopService.selectedShop;
            //this.shopDto.{1} = ShopService.selectedShop.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      
    }
    
    createShopClicked() {
      this.shopService.createShop(this.shopDto).subscribe(
          result => {
            if(result != null)
              console.log("Shop Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateShopClicked() {
      this.shopService.updateShop(this.selectedShopId, this.shopDto).subscribe(
        result => {
          if(result != null) {
              this.shop = result;
              console.log("Shop : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteShopClicked() {
      this.shopService.deleteShop(this.selectedShopId);
    }

    getShopClicked() {
      this.shopService.getShop(this.selectedShopId).subscribe(
        result => {
          if(result != null) {
              this.shop = result;
              console.log("Shop : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
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

    
    
}

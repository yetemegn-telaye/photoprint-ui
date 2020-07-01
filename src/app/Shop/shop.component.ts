import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ShopService} from './shop.service';
import {ShopDto} from './ShopDto';
import { UserService } from "../User/user.service";
import { Deliveryoption } from '../Deliveryoption/deliveryoption';



@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
    providers: [ShopDto, ShopService, GenericServices , UserService
]
})
export class ShopComponent {

    error: string;
    result:Array<Object>;
    selectedShopId: string;
    shops: Array<Object>;
    shop: Object;
    saveOrUpdate : String = "Save";
    users: Array<Object>;
    deliveryOpt = Deliveryoption;
    

    constructor(private router: Router, private shopDto: ShopDto, private shopService: ShopService, private genericServices: GenericServices , private userService: UserService
) {
          if(ShopService.selectedShop != undefined || ShopService.selectedShop != null){
            this.shopDto = ShopService.selectedShop;
            //this.shopDto.{1} = ShopService.selectedShop.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllUsers();

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

    getAllUsers() {
      this.userService.getAllUsers().subscribe(
        result => {
          if(result != null) {
            this.users = result;
            console.log("All Users : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    selectdeliveryOpt(deliveryOpt) {
      console.log("Selected User: " + JSON.stringify(deliveryOpt));
      this.shopDto.deliveryOpt = deliveryOpt;
      console.log(JSON.stringify(this.shopDto));
    }

    
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {ShopimageinfoService} from './shopimageinfo.service';
import {ShopimageinfoDto} from './ShopimageinfoDto';
import { ShopService } from "../Shop/shop.service";



@Component({
    selector: 'shopimageinfo',
    templateUrl: './shopimageinfo.component.html',
    styleUrls: ['./shopimageinfo.component.css'],
    providers: [ShopimageinfoDto, ShopimageinfoService, GenericServices , ShopService
]
})
export class ShopimageinfoComponent {

    error: string;
    result:Array<Object>;
    selectedShopimageinfoId: string;
    shopimageinfos: Array<Object>;
    shopimageinfo: Object;
    saveOrUpdate : String = "Save";
    shops: Array<Object>;
    //imageSize:

    

    constructor(private router: Router, private shopimageinfoDto: ShopimageinfoDto, private shopimageinfoService: ShopimageinfoService, private genericServices: GenericServices , private shopService: ShopService
) {
          if(ShopimageinfoService.selectedShopimageinfo != undefined || ShopimageinfoService.selectedShopimageinfo != null){
            this.shopimageinfoDto = ShopimageinfoService.selectedShopimageinfo;
            //this.shopimageinfoDto.{1} = ShopimageinfoService.selectedShopimageinfo.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllShops();

    }
    
    createShopimageinfoClicked() {
      this.shopimageinfoService.createShopimageinfo(this.shopimageinfoDto).subscribe(
          result => {
            if(result != null)
              console.log("Shopimageinfo Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateShopimageinfoClicked() {
      this.shopimageinfoService.updateShopimageinfo(this.selectedShopimageinfoId, this.shopimageinfoDto).subscribe(
        result => {
          if(result != null) {
              this.shopimageinfo = result;
              console.log("Shopimageinfo : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteShopimageinfoClicked() {
      this.shopimageinfoService.deleteShopimageinfo(this.selectedShopimageinfoId);
    }

    getShopimageinfoClicked() {
      this.shopimageinfoService.getShopimageinfo(this.selectedShopimageinfoId).subscribe(
        result => {
          if(result != null) {
              this.shopimageinfo = result;
              console.log("Shopimageinfo : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllShopimageinfosClicked() {
      this.shopimageinfoService.getAllShopimageinfos().subscribe(
        result => {
          if(result != null) {
            this.shopimageinfos = result;
            console.log("All Shopimageinfos : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllShops() {
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

    selectshop(shop) {
      console.log("Selected Shop: " + JSON.stringify(shop));
      this.shopimageinfoDto.shop = shop;
      console.log(JSON.stringify(this.shopimageinfoDto));
    }

    
}

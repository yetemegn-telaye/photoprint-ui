import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {AddressService} from './address.service';
import {AddressDto} from './AddressDto';
import { ShopService } from "../Shop/shop.service";



@Component({
    selector: 'address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
    providers: [AddressDto, AddressService, GenericServices , ShopService
]
})
export class AddressComponent {

    error: string;
    result:Array<Object>;
    selectedAddressId: string;
    addresss: Array<Object>;
    address: Object;
    saveOrUpdate : String = "Save";
    shops: Array<Object>;

    

    constructor(private router: Router, private addressDto: AddressDto, private addressService: AddressService, private genericServices: GenericServices , private shopService: ShopService
) {
          if(AddressService.selectedAddress != undefined || AddressService.selectedAddress != null){
            this.addressDto = AddressService.selectedAddress;
            //this.addressDto.{1} = AddressService.selectedAddress.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      this.getAllShops();

    }
    
    createAddressClicked() {
      this.addressService.createAddress(this.addressDto).subscribe(
          result => {
            if(result != null)
              console.log("Address Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateAddressClicked() {
      this.addressService.updateAddress(this.selectedAddressId, this.addressDto).subscribe(
        result => {
          if(result != null) {
              this.address = result;
              console.log("Address : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteAddressClicked() {
      this.addressService.deleteAddress(this.selectedAddressId);
    }

    getAddressClicked() {
      this.addressService.getAddress(this.selectedAddressId).subscribe(
        result => {
          if(result != null) {
              this.address = result;
              console.log("Address : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllAddresssClicked() {
      this.addressService.getAllAddresss().subscribe(
        result => {
          if(result != null) {
            this.addresss = result;
            console.log("All Addresss : " + JSON.stringify(result));
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
      this.addressDto.shop = shop;
      console.log(JSON.stringify(this.addressDto));
    }

    
}

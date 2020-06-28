import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {AddressService} from './address.service';
import {AddressDto} from './AddressDto';

@Component({
    selector: 'addresss-view-edit',
    templateUrl: './address.view.edit.component.html',
    styleUrls: ['./address.view.edit.component.css'],
    providers: [AddressDto, AddressService, GenericServices]
})
export class AddressViewEditComponent{

    columns : Array<string>;
    addresss: Set<AddressDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private addressDto: AddressDto, private addressService: AddressService) {
        this.columns = ["Select"];
        this.getAllAddresssClicked();
        this.editMode = false;
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

    editClicked(addressId) {
        this.selectedRowId = addressId;
    }

    updateAddressClicked(addressId, address) {
        this.addressService.updateAddress(addressId, address).subscribe(
          result => {
            if(result != null) {
              console.log("Address : " + JSON.stringify(result));
              console.log("Address Object: " + JSON.stringify(result));
              console.log("Address Id: " + addressId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

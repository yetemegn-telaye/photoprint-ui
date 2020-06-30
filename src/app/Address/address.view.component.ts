import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {AddressService} from './address.service';
import {AddressDto} from './AddressDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'addresss-view',
    templateUrl: './address.view.component.html',
    styleUrls: ['./address.view.component.css'],
    providers: [AddressDto, AddressService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class AddressViewComponent{

    columns : Array<string>;
    addresss: Array<AddressDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private addressDto: AddressDto, private addressService: AddressService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"woreda"
,"streetAddress"
,"kebele"
,"city"
,"location"
,"zipCode"
,"country"
];
        this.getAllAddresssClicked();
    }

    getAllAddresssClicked() {
        this.addressService.getAllAddresss().subscribe(
          result => {
            if(result != null) {
              this.addresss = result;
              console.log("All Address : " + JSON.stringify(result));
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
       this.addresss.forEach( address => {
           if(this.selectAllValue) {
             address.selected = true;
           } else {
             address.selected = false;
           }
       });
     }

    deleteAddresss() {
      if(this.addresss.filter(address => address.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.addresss.forEach(address => {
            if(address.selected) {
               this.addressService.deleteAddress(address.addressId).subscribe(
                 result => {
                   console.log("Address Deleted ! Id: " + address.addressId );
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

     editAddress() {
          var selectedCount = this.addresss.filter(address => address.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : AddressDto =  this.addresss.filter(address => address.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          AddressService.selectedAddress = selectedItem;

          this.router.navigate(['/addresss']);
     }
}

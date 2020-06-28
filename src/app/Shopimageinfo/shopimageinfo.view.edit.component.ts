import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {ShopimageinfoService} from './shopimageinfo.service';
import {ShopimageinfoDto} from './ShopimageinfoDto';

@Component({
    selector: 'shopimageinfos-view-edit',
    templateUrl: './shopimageinfo.view.edit.component.html',
    styleUrls: ['./shopimageinfo.view.edit.component.css'],
    providers: [ShopimageinfoDto, ShopimageinfoService, GenericServices]
})
export class ShopimageinfoViewEditComponent{

    columns : Array<string>;
    shopimageinfos: Set<ShopimageinfoDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private shopimageinfoDto: ShopimageinfoDto, private shopimageinfoService: ShopimageinfoService) {
        this.columns = ["Select"];
        this.getAllShopimageinfosClicked();
        this.editMode = false;
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

    editClicked(shopimageinfoId) {
        this.selectedRowId = shopimageinfoId;
    }

    updateShopimageinfoClicked(shopimageinfoId, shopimageinfo) {
        this.shopimageinfoService.updateShopimageinfo(shopimageinfoId, shopimageinfo).subscribe(
          result => {
            if(result != null) {
              console.log("Shopimageinfo : " + JSON.stringify(result));
              console.log("Shopimageinfo Object: " + JSON.stringify(result));
              console.log("Shopimageinfo Id: " + shopimageinfoId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

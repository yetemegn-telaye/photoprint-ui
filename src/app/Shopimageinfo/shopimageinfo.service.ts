import {Injectable} from '@angular/core';
import { ShopimageinfoDto } from './ShopimageinfoDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class ShopimageinfoService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "shopimageinfos";
  public static selectedShopimageinfo: ShopimageinfoDto;
  public static selectedShopimageinfos: Set<ShopimageinfoDto>;

  constructor(private genericServices: GenericServices) {

  }

  createShopimageinfo(shopimageinfoDto : ShopimageinfoDto) {
    var url = ShopimageinfoService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, shopimageinfoDto, GenericServices.POST_METHOD);
  }

  updateShopimageinfo(shopimageinfoId: string, shopimageinfoDto: ShopimageinfoDto) {
    var url = ShopimageinfoService.CONTROLLER_PATH + "/" + shopimageinfoId;
    return this.genericServices.httpService(url, shopimageinfoDto, GenericServices.PUT_METHOD);
  }

  deleteShopimageinfo(shopimageinfoId: string) {
    var url = ShopimageinfoService.CONTROLLER_PATH + "/" + shopimageinfoId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getShopimageinfo(shopimageinfoId: string) {
    var url = ShopimageinfoService.CONTROLLER_PATH + "/" + shopimageinfoId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllShopimageinfos() {
    return this.genericServices.httpService(ShopimageinfoService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

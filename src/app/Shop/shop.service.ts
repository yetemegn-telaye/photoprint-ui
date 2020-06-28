import {Injectable} from '@angular/core';
import { ShopDto } from './ShopDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class ShopService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "shops";
  public static selectedShop: ShopDto;
  public static selectedShops: Set<ShopDto>;

  constructor(private genericServices: GenericServices) {

  }

  createShop(shopDto : ShopDto) {
    var url = ShopService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, shopDto, GenericServices.POST_METHOD);
  }

  updateShop(shopId: string, shopDto: ShopDto) {
    var url = ShopService.CONTROLLER_PATH + "/" + shopId;
    return this.genericServices.httpService(url, shopDto, GenericServices.PUT_METHOD);
  }

  deleteShop(shopId: string) {
    var url = ShopService.CONTROLLER_PATH + "/" + shopId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getShop(shopId: string) {
    var url = ShopService.CONTROLLER_PATH + "/" + shopId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllShops() {
    return this.genericServices.httpService(ShopService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

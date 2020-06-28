import {Injectable} from '@angular/core';
import { AddressDto } from './AddressDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class AddressService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "addresss";
  public static selectedAddress: AddressDto;
  public static selectedAddresss: Set<AddressDto>;

  constructor(private genericServices: GenericServices) {

  }

  createAddress(addressDto : AddressDto) {
    var url = AddressService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, addressDto, GenericServices.POST_METHOD);
  }

  updateAddress(addressId: string, addressDto: AddressDto) {
    var url = AddressService.CONTROLLER_PATH + "/" + addressId;
    return this.genericServices.httpService(url, addressDto, GenericServices.PUT_METHOD);
  }

  deleteAddress(addressId: string) {
    var url = AddressService.CONTROLLER_PATH + "/" + addressId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getAddress(addressId: string) {
    var url = AddressService.CONTROLLER_PATH + "/" + addressId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllAddresss() {
    return this.genericServices.httpService(AddressService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

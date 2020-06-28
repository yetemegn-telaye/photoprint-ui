import {Injectable} from '@angular/core';
import { ImageinfoDto } from './ImageinfoDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class ImageinfoService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "imageinfos";
  public static selectedImageinfo: ImageinfoDto;
  public static selectedImageinfos: Set<ImageinfoDto>;

  constructor(private genericServices: GenericServices) {

  }

  createImageinfo(imageinfoDto : ImageinfoDto) {
    var url = ImageinfoService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, imageinfoDto, GenericServices.POST_METHOD);
  }

  updateImageinfo(imageinfoId: string, imageinfoDto: ImageinfoDto) {
    var url = ImageinfoService.CONTROLLER_PATH + "/" + imageinfoId;
    return this.genericServices.httpService(url, imageinfoDto, GenericServices.PUT_METHOD);
  }

  deleteImageinfo(imageinfoId: string) {
    var url = ImageinfoService.CONTROLLER_PATH + "/" + imageinfoId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getImageinfo(imageinfoId: string) {
    var url = ImageinfoService.CONTROLLER_PATH + "/" + imageinfoId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllImageinfos() {
    return this.genericServices.httpService(ImageinfoService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

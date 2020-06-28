import {Injectable} from '@angular/core';
import { UserDto } from './UserDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class UserService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "users";
  public static selectedUser: UserDto;
  public static selectedUsers: Set<UserDto>;

  constructor(private genericServices: GenericServices) {

  }

  createUser(userDto : UserDto) {
    var url = UserService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, userDto, GenericServices.POST_METHOD);
  }

  updateUser(userId: string, userDto: UserDto) {
    var url = UserService.CONTROLLER_PATH + "/" + userId;
    return this.genericServices.httpService(url, userDto, GenericServices.PUT_METHOD);
  }

  deleteUser(userId: string) {
    var url = UserService.CONTROLLER_PATH + "/" + userId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getUser(userId: string) {
    var url = UserService.CONTROLLER_PATH + "/" + userId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllUsers() {
    return this.genericServices.httpService(UserService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

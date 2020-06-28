import {Injectable} from '@angular/core';
import { ClientDto } from './ClientDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class ClientService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "clients";
  public static selectedClient: ClientDto;
  public static selectedClients: Set<ClientDto>;

  constructor(private genericServices: GenericServices) {

  }

  createClient(clientDto : ClientDto) {
    var url = ClientService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, clientDto, GenericServices.POST_METHOD);
  }

  updateClient(clientId: string, clientDto: ClientDto) {
    var url = ClientService.CONTROLLER_PATH + "/" + clientId;
    return this.genericServices.httpService(url, clientDto, GenericServices.PUT_METHOD);
  }

  deleteClient(clientId: string) {
    var url = ClientService.CONTROLLER_PATH + "/" + clientId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getClient(clientId: string) {
    var url = ClientService.CONTROLLER_PATH + "/" + clientId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllClients() {
    return this.genericServices.httpService(ClientService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

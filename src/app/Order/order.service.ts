import {Injectable} from '@angular/core';
import { OrderDto } from './OrderDto';
import {GenericServices } from '../GenericServices';

@Injectable()
export class OrderService {

  public static CONTROLLER_PATH : string = GenericServices.BASE_URL + "orders";
  public static selectedOrder: OrderDto;
  public static selectedOrders: Set<OrderDto>;

  constructor(private genericServices: GenericServices) {

  }

  createOrder(orderDto : OrderDto) {
    var url = OrderService.CONTROLLER_PATH;
    return this.genericServices.httpService(url, orderDto, GenericServices.POST_METHOD);
  }

  updateOrder(orderId: string, orderDto: OrderDto) {
    var url = OrderService.CONTROLLER_PATH + "/" + orderId;
    return this.genericServices.httpService(url, orderDto, GenericServices.PUT_METHOD);
  }

  deleteOrder(orderId: string) {
    var url = OrderService.CONTROLLER_PATH + "/" + orderId;
    return this.genericServices.httpService(url, null, GenericServices.DELETE_METHOD);
  }
   
  getOrder(orderId: string) {
    var url = OrderService.CONTROLLER_PATH + "/" + orderId;
    return this.genericServices.httpService(url, null, GenericServices.GET_METHOD);
  }

  getAllOrders() {
    return this.genericServices.httpService(OrderService.CONTROLLER_PATH, null, GenericServices.GET_METHOD);
  }
}

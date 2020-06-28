import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {OrderService} from './order.service';
import {OrderDto} from './OrderDto';



@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [OrderDto, OrderService, GenericServices ]
})
export class OrderComponent {

    error: string;
    result:Array<Object>;
    selectedOrderId: string;
    orders: Array<Object>;
    order: Object;
    saveOrUpdate : String = "Save";
    
    

    constructor(private router: Router, private orderDto: OrderDto, private orderService: OrderService, private genericServices: GenericServices ) {
          if(OrderService.selectedOrder != undefined || OrderService.selectedOrder != null){
            this.orderDto = OrderService.selectedOrder;
            //this.orderDto.{1} = OrderService.selectedOrder.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
	      
    }
    
    createOrderClicked() {
      this.orderService.createOrder(this.orderDto).subscribe(
          result => {
            if(result != null)
              console.log("Order Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateOrderClicked() {
      this.orderService.updateOrder(this.selectedOrderId, this.orderDto).subscribe(
        result => {
          if(result != null) {
              this.order = result;
              console.log("Order : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteOrderClicked() {
      this.orderService.deleteOrder(this.selectedOrderId);
    }

    getOrderClicked() {
      this.orderService.getOrder(this.selectedOrderId).subscribe(
        result => {
          if(result != null) {
              this.order = result;
              console.log("Order : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    getAllOrdersClicked() {
      this.orderService.getAllOrders().subscribe(
        result => {
          if(result != null) {
            this.orders = result;
            console.log("All Orders : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    
    
}

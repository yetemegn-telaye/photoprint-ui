import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {OrderService} from './order.service';
import {OrderDto} from './OrderDto';

@Component({
    selector: 'orders-view-edit',
    templateUrl: './order.view.edit.component.html',
    styleUrls: ['./order.view.edit.component.css'],
    providers: [OrderDto, OrderService, GenericServices]
})
export class OrderViewEditComponent{

    columns : Array<string>;
    orders: Set<OrderDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private orderDto: OrderDto, private orderService: OrderService) {
        this.columns = ["Select"];
        this.getAllOrdersClicked();
        this.editMode = false;
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

    editClicked(orderId) {
        this.selectedRowId = orderId;
    }

    updateOrderClicked(orderId, order) {
        this.orderService.updateOrder(orderId, order).subscribe(
          result => {
            if(result != null) {
              console.log("Order : " + JSON.stringify(result));
              console.log("Order Object: " + JSON.stringify(result));
              console.log("Order Id: " + orderId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

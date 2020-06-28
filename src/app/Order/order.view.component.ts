import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {OrderService} from './order.service';
import {OrderDto} from './OrderDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'orders-view',
    templateUrl: './order.view.component.html',
    styleUrls: ['./order.view.component.css'],
    providers: [OrderDto, OrderService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class OrderViewComponent{

    columns : Array<string>;
    orders: Array<OrderDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private orderDto: OrderDto, private orderService: OrderService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"status"
,"date"
];
        this.getAllOrdersClicked();
    }

    getAllOrdersClicked() {
        this.orderService.getAllOrders().subscribe(
          result => {
            if(result != null) {
              this.orders = result;
              console.log("All Order : " + JSON.stringify(result));
            }
          }
        )
    }

    isNotPrimitive(property) {
        if (property)
            return typeof property === 'object';
        return false;
    }

    isBoolean(property) {
      if(property !== undefined || property !== null)
        return typeof property === 'boolean';
      return false;
    }

    selectAll() {
       this.orders.forEach( order => {
           if(this.selectAllValue) {
             order.selected = true;
           } else {
             order.selected = false;
           }
       });
     }

    deleteOrders() {
      if(this.orders.filter(order => order.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.orders.forEach(order => {
            if(order.selected) {
               this.orderService.deleteOrder(order.orderId).subscribe(
                 result => {
                   console.log("Order Deleted ! Id: " + order.orderId );
                 }
               );
            }
          })
        }
      }).catch(() => {
             console.log('Delete Dialog: User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
             return new Observable;
      });
    }

     editOrder() {
          var selectedCount = this.orders.filter(order => order.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : OrderDto =  this.orders.filter(order => order.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          OrderService.selectedOrder = selectedItem;

          this.router.navigate(['/orders']);
     }
}

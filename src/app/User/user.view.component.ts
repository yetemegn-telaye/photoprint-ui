import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {UserService} from './user.service';
import {UserDto} from './UserDto';
import { ConfirmationDialogService } from '../z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogService } from '../z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service'
import { Observable } from "rxjs";

@Component({
    selector: 'users-view',
    templateUrl: './user.view.component.html',
    styleUrls: ['./user.view.component.css'],
    providers: [UserDto, UserService, ConfirmationDialogService, MessageDialogService, GenericServices]
})
export class UserViewComponent{

    columns : Array<string>;
    users: Array<UserDto>;
    selectAllValue: boolean = false;

    constructor(private router: Router, private userDto: UserDto, private userService: UserService, private confirmationDialogService:  ConfirmationDialogService, private messageDialogService: MessageDialogService, private genericServices: GenericServices) {
        this.columns = ["" ,"role"
,"userName"
,"password"
];
        this.getAllUsersClicked();
    }

    getAllUsersClicked() {
        this.userService.getAllUsers().subscribe(
          result => {
            if(result != null) {
              this.users = result;
              console.log("All User : " + JSON.stringify(result));
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
       this.users.forEach( user => {
           if(this.selectAllValue) {
             user.selected = true;
           } else {
             user.selected = false;
           }
       });
     }

    deleteUsers() {
      if(this.users.filter(user => user.selected === true).length == 0){
        this.messageDialogService.message('Delete', 'Please select one or more items to be deleted ?');
        return;
      }
      this.confirmationDialogService.confirm('Delete', 'Do You Really Want To Delete Selected Items ?')
      .then((confirmed) => {
        if(confirmed){
          this.users.forEach(user => {
            if(user.selected) {
               this.userService.deleteUser(user.userId).subscribe(
                 result => {
                   console.log("User Deleted ! Id: " + user.userId );
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

     editUser() {
          var selectedCount = this.users.filter(user => user.selected === true).length;
          if(selectedCount != 1){
            if(selectedCount > 1)
              this.messageDialogService.message('Edit', 'Please select only one item to be updated ?');
            else
              this.messageDialogService.message('Edit', 'Please select one item to be updated ?');
            return;
          }
          var selectedItem : UserDto =  this.users.filter(user => user.selected === true)[0];
          console.log("Selected Item for edit: " + JSON.stringify(selectedItem));

          UserService.selectedUser = selectedItem;

          this.router.navigate(['/users']);
     }
}

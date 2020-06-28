import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from '../GenericServices';
import {UserService} from './user.service';
import {UserDto} from './UserDto';

@Component({
    selector: 'users-view-edit',
    templateUrl: './user.view.edit.component.html',
    styleUrls: ['./user.view.edit.component.css'],
    providers: [UserDto, UserService, GenericServices]
})
export class UserViewEditComponent{

    columns : Array<string>;
    users: Set<UserDto>;
    editMode: boolean;
    selectedRowId: string;

    constructor(private router: Router, private userDto: UserDto, private userService: UserService) {
        this.columns = ["Select"];
        this.getAllUsersClicked();
        this.editMode = false;
    }

    getAllUsersClicked() {
        this.userService.getAllUsers().subscribe(
          result => {
            if(result != null) {
              this.users = result;
              console.log("All Users : " + JSON.stringify(result));
            }
          },
          error => console.log(error)
        )
    }

    editClicked(userId) {
        this.selectedRowId = userId;
    }

    updateUserClicked(userId, user) {
        this.userService.updateUser(userId, user).subscribe(
          result => {
            if(result != null) {
              console.log("User : " + JSON.stringify(result));
              console.log("User Object: " + JSON.stringify(result));
              console.log("User Id: " + userId);
            }
          },
          error => console.log(error)
        )
        this.selectedRowId = null;
     }
}

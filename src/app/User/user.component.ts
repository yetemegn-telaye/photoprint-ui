import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {GenericServices} from './../GenericServices';
import {UserService} from './user.service';
import {UserDto} from './UserDto';
import {Userrole} from '../Userrole/userrole'


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserDto, UserService, GenericServices ]
})
export class UserComponent implements OnChanges{

    error: string;
    result:Array<Object>;
    selectedUserId: string;
    users: Array<Object>;
    user: Object;
    saveOrUpdate : String = "Save";
    role =  Userrole;
    @Output() public valueChange = new EventEmitter(); 
    @Input("userValue") public userValue: UserDto;
    

    constructor(private router: Router, private userDto: UserDto, private userService: UserService, private genericServices: GenericServices ) {
          if(UserService.selectedUser != undefined || UserService.selectedUser != null){
            this.userDto = UserService.selectedUser;
            //this.userDto.{1} = UserService.selectedUser.{1};
            this.saveOrUpdate = "Update";
          } else {
            this.saveOrUpdate = "Save";
          }
          this.valueChange.emit(this.userDto);
	      
    }

    ngOnChanges(changes: SimpleChanges) {
       
        if(changes.userValue.currentValue != null)
          this.userDto = changes.userValue.currentValue;
    }

    updateModel() {
      alert('HERE');
      this.valueChange.emit(this.userDto);
    }

    
    createUserClicked() {
      this.userService.createUser(this.userDto).subscribe(
          result => {
            if(result != null)
              console.log("User Created " + JSON.stringify(result));
          },
          error => console.log(error)
      );
    }
    
    updateUserClicked() {
      this.userService.updateUser(this.selectedUserId, this.userDto).subscribe(
        result => {
          if(result != null) {
              this.user = result;
              console.log("User : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
    }

    deleteUserClicked() {
      this.userService.deleteUser(this.selectedUserId);
    }

    getUserClicked() {
      this.userService.getUser(this.selectedUserId).subscribe(
        result => {
          if(result != null) {
              this.user = result;
              console.log("User : " + JSON.stringify(result));
          }
        },
        error => console.log(error)
      )
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

    selectrole(role) {
      console.log("Selected Cardinality: " + JSON.stringify(role));
      this.userDto.role = role;
      console.log(JSON.stringify(this.userDto));
    }
    
    
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../Address/address.service';
import { AddressDto } from '../Address/AddressDto';
import { ContactService } from '../Contact/contact.service';
import { ContactDto } from '../Contact/ContactDto';
import { GenericServices } from '../GenericServices';
import { UserService } from '../User/user.service';
import { UserDto } from '../User/UserDto';

@Component({
  selector: 'app-signup-ui',
  templateUrl: './signup-ui.component.html',
  styleUrls: ['./signup-ui.component.css'],
  providers: [UserService, AddressService, ContactService, GenericServices]
})
export class SignupUiComponent implements OnInit {

  userDto: UserDto;
  addressDto: AddressDto;
  contactDto: ContactDto;

  constructor(private router: Router, public userService: UserService, public addressService: AddressService, public contactService: ContactService, public genericService: GenericServices ) { }

  ngOnInit() {
  }

  signUp() {
    this.createUserClicked();
    this.createAddressClicked();
    this.createContactClicked();
    this.router.navigate(['/users']);
  }

  captureUserDtoChange(userDto) {

    this.userDto = userDto;
  }


  createUserClicked() {
    console.warn('User Value'+ this.userDto);
    this.userService.createUser(this.userDto).subscribe(
        result => {
          if(result != null)
            console.log("User Created " + JSON.stringify(result));
        },
        error => console.log(error)
    );
  }


  createAddressClicked() {
    this.addressService.createAddress(this.addressDto).subscribe(
        result => {
          if(result != null)
            console.log("Address Created " + JSON.stringify(result));
        },
        error => console.log(error)
    );
  }


  createContactClicked() {
    this.contactService.createContact(this.contactDto).subscribe(
        result => {
          if(result != null)
            console.log("Contact Created " + JSON.stringify(result));
        },
        error => console.log(error)
    );
  }

}

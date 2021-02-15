import { Component } from "@angular/core";
import { ClientService } from "src/app/Client/client.service";
import { ClientDto } from "src/app/Client/ClientDto";
import { GenericServices } from "src/app/GenericServices";
import { UserService } from "../user.service";
import { UserDto } from "../UserDto";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [ UserDto, ClientDto, UserService, ClientService, GenericServices ]
})
export class SignUpComponent {

    constructor(private userDto: UserDto, private clientDto: ClientDto, private userService: UserService, private clientService: ClientService) {

    }

    registerUser() {
        alert("you are about to sign up!");
        this.userService.createUser(this.userDto).subscribe(
            result => {
                if(result != null)
                    console.log("User is Created " + JSON.stringify(result));
                this.clientDto.user = new UserDto();
                this.clientDto.user.userId = result.userId;
                this.clientService.createClient(this.clientDto).subscribe(
                    result => {
                        if(result != null)
                            console.log("Client is Created " + JSON.stringify(result));
                    }
                );
            }, err => {
                console.error("Got ERROR: " + JSON.stringify(err));
            }
        );
        

    }
    captureUserChange(userDto){
        this.userDto = userDto;
        console.log("New User Vlue" + this.userDto);
    }

    captureClientChange(clientDto){
        this.clientDto = clientDto;
        console.log("New Client Vlue" + this.clientDto);
    }
 }

import { HttpResponse }   from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageDialogService } from '../Alert/message-dialog/message-dialog.service'

@Injectable()
export class SuccessHandler{
    constructor(private router : Router, private messageDialogService: MessageDialogService) {}

    //success(message : String){}
    success(evt : HttpResponse<any>, isFwdAddress : boolean = false){
        console.log("Success Event Recived in SuccessHandler: " + JSON.stringify(evt));
        if(evt){
            if(evt.status === 201){
                //this.alertService.success(" Saved Successfully! ");
                console.log("... About to call message service");
                this.messageDialogService.message('Success', 'Data Saved Successfuly').then(okButton => {
                    console.log("Ok buttton pressed : " + okButton);
                    if(okButton){
                        //TODO: route to forwarding address
                        if(isFwdAddress){
                            //If it is not login, signup, preferences or home page go to view page (for Admin App)
                            //TODO: add logic for home page
                            if(!(this.router.url.includes('login') || this.router.url.includes('signup') || this.router.url.includes('preferences')))
                                this.router.navigate([this.router.url + '-view']);
                            if(this.router.url.includes('signup')){
                                localStorage.setItem('current_user_id', evt.body.userId);
                                localStorage.setItem('current_user_userName', evt.body.userName);
                                localStorage.setItem('current_user_role', evt.body.role);
                                this.router.navigate(['/preferences']);
                            }
                               
                            if(this.router.url.includes('preferences'))
                               this.router.navigate['/home'];
                        }
                            
                    }
                })
                .catch(() => {
                    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
                });;
                console.log(" .... Afeter Calling Message Service");
            }
            if(evt.status === 204)
                //this.alertService.success(" Deleted Successfully! ");
                this.messageDialogService.message("Success", "Data Deleted Successfuly");
            if(evt.status === 202)
                //this.alertService.success(" Updated Successfully! ");
                this.messageDialogService.message("Success", "Data Updated Successfuly");
            // if(evt.status === 200){
            //     if(this.router.url.includes('preferences'))
            //           this.router.navigate['/home'];
            // }
            if(this.router.url.includes('preferences'))
                this.router.navigate['/home'];
        }
   
    }
   

}
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorDialogService } from '../Alert/error-dialog/error-dialog.service';

@Injectable()
export class ExceptionHandler {
    constructor(private errorDialogService : ErrorDialogService) {}

    exception(err: HttpErrorResponse){
        console.log("Exception Event Recived in ExceptionHandler : " + JSON.stringify(err));
        if(err.status == 400) {
            this.errorDialogService.message('Error', err.error);
            console.error("Error: BAD INPUT : " + JSON.stringify(err.error));
            //this.alertService.error(err.error);
          } else if(err.status == 401) {
            console.error("Error: Check with Token and Authentication URL OR CORS setup : " + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error);
          } else if(err.status == 403) {
            console.error("Error: Access Forbiden / Check if you are authorized to access the data :" + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error);
          } else if (err.status == 404) {
            console.error("Error: DATA NOT FOUND : " + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error);
          } else if (err.status == 409) {
            console.error("Error: VALIDATE YOUR INPUT DATA / DATA CONFLICT : " + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error);
          } else if (err.status == 500) {
            console.error("Error: INFORM DEVELOPERS : " + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error); 
          } else if (err.status == 503) {
            console.error("Error: INFORM SYS ADMINS : " + JSON.stringify(err.error));
            this.errorDialogService.message('Error', err.error);
            //this.alertService.error(err.error);
          } else {
            console.log("Unknown Error : " + JSON.stringify(err.error));
            //this.alertService.error(err.error);
          }
    }
}
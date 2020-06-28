import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of, from } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import {SuccessHandler} from '../Success_handling/success.handler.service'
import {ExceptionHandler} from '../Exception_handling/Exception.handler.service'
import { ConfirmationDialogService } from '../Alert/confirmation-dialog/confirmation-dialog.service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private successHandler : SuccessHandler, private exceptionHandler: ExceptionHandler, private confirmationDialogService: ConfirmationDialogService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    console.log("Request Method: "+ req.method);
        //const dupReq = req.clone();
        if(req.method == "DELETE") {
            console.log("Got into interceptor! " + req.method);
            //TODO: uncomment this section and fix the issue
            //  this.confirmationDialogService.confirm('Delete', 'Do you really want to Delete ?')
            //  .then((confirmed) => {
            //      console.log("is Confirmed: " + confirmed)
                 //if(confirmed){
                    // console.log('User confirmed:' + confirmed);
                    //TODO: figure out why it is not working at this point 
                    //after user confimation it got here but not deleting record
                    return this.returnNormalResponse(req, next);
                //} else {
                //     return new Observable; 
                // }
            // }).catch(() => {
            //     console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
            //     return new Observable;
            // }
            //);
        } else if (req.method != "DELETE") {
            console.log("Got into interceptor! " + req.method);
            return this.returnNormalResponse(req, next);
        }
        
    
    }


    returnNormalResponse(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("About to return a normal response from backend API");
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.status === 200 || evt.status == 202 || evt.status === 201 || evt.status === 204){
                        console.log("Success in intereceptor " + evt.status);
                        this.successHandler.success(evt, true);
                    }
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        console.log("Exception in intereceptor : " + JSON.stringify(err));
                        this.exceptionHandler.exception(err);
                    } catch(e) {
                        console.log("Error in intereceptor : " + JSON.stringify(e));
                        this.exceptionHandler.exception(err);
                    }
                    //log error 
                }
                return of(err);
            }));
    }
      
}
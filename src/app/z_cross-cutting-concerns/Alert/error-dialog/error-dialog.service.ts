import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorDialogComponent } from './error-dialog.component';
import { ErrorDto } from '../../Exception_handling/errorDto'

@Injectable()
export class ErrorDialogService {

  constructor(private modalService: NgbModal) { }

  public message(
    title: string,
    errorDto: ErrorDto,
    btnOkText: string = 'OK',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ErrorDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = errorDto.userMessage;
    modalRef.componentInstance.detailMessage = "Detail: " + errorDto.internalMessage;
    modalRef.componentInstance.errorCode = "Status Code: " + errorDto.errorCode;
    modalRef.componentInstance.occuredOn = "Occured at: " + errorDto.occuredOn;
    modalRef.componentInstance.moreInfoUrl = "More Info : " + errorDto.moreInfoUrl;
    modalRef.componentInstance.btnOkText = btnOkText;
    console.log("Message Dialog Service - message :" + errorDto.toString());
    return modalRef.result;
  }

}

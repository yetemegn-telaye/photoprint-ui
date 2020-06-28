import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MessageDialogComponent } from './message-dialog.component';

@Injectable()
export class MessageDialogService {

  constructor(private modalService: NgbModal) { }

  public message(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(MessageDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    console.log("Message Dialog Service - message :" + message);
    return modalRef.result;
  }

}

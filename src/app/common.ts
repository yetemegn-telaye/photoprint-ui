import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Common {
  public title = new BehaviorSubject('PhotoPrinter');

  constructor() { }

  setTitle(title) {
    this.title.next(title);
  }
}

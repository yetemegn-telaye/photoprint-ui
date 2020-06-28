import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Common } from './common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "PhotoPrinter";

   constructor(private router: Router, private common : Common) {

   }

   ngOnInit(){
    this.common.title.subscribe(title => {
      this.title = title;
    })
   }

}

import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  logoUrl: string = "assets/images/logo2.png";

  constructor(public service: DataService) {}

  changeUnderline(event: any) {
    let elDis = document.getElementById('menu');
    if(elDis){
      elDis.style.textDecoration = 'underline';
    }
    if(this.service.displayedEl){
      this.service.displayedEl.style.textDecoration = 'none';
    }
    this.service.displayedEl = elDis;
  }
}

import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  constructor(public service: DataService) {}

  @Input() dishName: string | undefined;
  @Input() dishPhoto: string | undefined;
  @Input() dishQuantity!: number;
  @Input() dishPrice: number | undefined;
  faPlus = faPlus;
  faMinus = faMinus;
  dishLocalCounter = 0;
  
  onClickPlus(){
    if(this.dishQuantity>0){
      console.log("plus clicked");
      this.service.dishCounter-=this.dishLocalCounter;
      this.dishLocalCounter++;
      this.service.dishCounter+=this.dishLocalCounter;
      this.dishQuantity--; 
    }
    console.log(this.service.smallestPrice);
  }

  onClickMinus(){
    if(this.dishLocalCounter>0){
      console.log("minus clicked");
      this.service.dishCounter-=this.dishLocalCounter;
      this.dishLocalCounter--;
      this.service.dishCounter+=this.dishLocalCounter;
      this.dishQuantity++;
    }
  }

  removeDish(event: any) {
    console.log(event.target);
  }
}

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

  @Input() dishId!: number;
  @Input() dishName: string | undefined;
  @Input() dishPhoto: string | undefined;
  @Input() dishQuantity!: number;
  @Input() dishPrice: number | undefined;

  faPlus = faPlus;
  faMinus = faMinus;
  dishLocalCounter = 0;
  
  onClickPlus(event: any){
    if(this.dishQuantity>0){
      this.service.dishCounter-=this.dishLocalCounter;
      this.dishLocalCounter++;
      this.service.dishCounter+=this.dishLocalCounter;
      this.dishQuantity--; 
      
      const dish = {
        id: this.dishId,
        name: this.dishName,
        photo: this.dishPhoto,
        price: this.dishPrice
      }
      this.service.addDish(dish);
    }
  }

  onClickMinus(){
    if(this.dishLocalCounter>0){
      this.service.dishCounter-=this.dishLocalCounter;
      this.dishLocalCounter--;
      this.service.dishCounter+=this.dishLocalCounter;
      this.dishQuantity++;

      const dish = {
        id: this.dishId,
        name: this.dishName,
        photo: this.dishPhoto,
        price: this.dishPrice
      }

    }
  }

  removeDish() {
  }
}

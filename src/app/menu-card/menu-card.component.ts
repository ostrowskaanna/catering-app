import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DetailsComponent } from '../details/details.component';
import { MenuContainerComponent } from '../menu-container/menu-container.component';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  constructor(public service: DataService, public dialog: MatDialog) {}

  @Input() dishId!: number;
  @Input() dishName!: string;
  @Input() dishOrigin!: string;
  @Input() dishType!: string; 
  @Input() dishPhoto!: string;
  @Input() dishQuantity!: number;
  @Input() dishPrice!: number;
  @Input() allPhotos!: string[];
  
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
        price: this.dishPrice,
        number: 1
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
        price: this.dishPrice,
        number: 1
      }
      this.service.removeDish(dish);
    }
  }

  @Output() newItemEvent = new EventEmitter<number>();

  removeDishFromDB() {
    console.log("in child");
    this.newItemEvent.emit(this.dishId);

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(DetailsComponent, dialogConfig);
  }

  showDishDetails() {
    const dish = {
      id: this.dishId,
      name: this.dishName,
      origin: this.dishOrigin, 
      type: this.dishType,
      photos: this.allPhotos
    }
    this.service.dishToDisplay = dish;
    this.service.displayPhotos();
    this.openDialog();
  }
}

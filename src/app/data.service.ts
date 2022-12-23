import { Injectable, Input } from '@angular/core';
@Injectable({
  providedIn: 'root'
})


export class DataService {
  dishCounter = 0;
  smallestPrice = 1000;
  biggestPrice = 0;
  addedDishes: any[] = []
  totalSum = 0;
  dishToDisplay!: any;

  addDish(dish: any) {
    let exist = false;
    this.addedDishes.forEach(d => {
      if(d.id==dish.id){
        d.number++; 
        exist = true;
      }
    });
    if(exist==false)
      this.addedDishes.push(dish);  
    this.totalSum += dish.price;  
  }

  removeDish(dish: any) {
    let id = -1;
    this.addedDishes.forEach(d => {
      id++;
      if(d.id==dish.id){
        if(d.number==1)
          this.addedDishes.splice(id, 1);
        else {
          d.number--;
        }  
      }   
    });
    this.totalSum -= dish.price;
  }

}

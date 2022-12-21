import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dishCounter = 0;
  smallestPrice = 1000;
  biggestPrice = 0;
  addedDishes: Object[] = []

  addDish(dish: any) {
    this.addedDishes.push(dish);
  }

  removeDish(dish: Object) {
    this.addedDishes.forEach((d, id) => {
      if(d==dish)
        this.addedDishes.splice(id, 1);
    })
  }
}

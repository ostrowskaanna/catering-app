import { Injectable, Input } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FirebaseStorage } from 'firebase/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  dishCounter = 0; //number of dishes added to the basket 
  smallestPrice = 1000;
  biggestPrice = 0;
  addedDishes: any[] = [] //dishes added to the basket 
  totalSum = 0; //total price of added dishes 
  dishToDisplay!: any; 
  imageObject: Array<object> = [];
  photos: string[] = [];

  displayedEl: HTMLElement | null = null;
  
  dishesInDB = 0; //number of dishes in DB
  storage!: FirebaseStorage; //data storage
  dishesRef!: Observable<any>; //DB dishes
  currentDishRef!: AngularFirestoreDocument<unknown>;

  originSelected: string | null = null;
  typeSelected: string | null = null;
  minPriceSelected!: number;
  maxPriceSelected!: number;
  
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

  removeDishFromOrder(dish: any) {
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

  checkIfDishAddedToOrder(id: number) {
    return this.addedDishes.filter(d => d.id==id).length;
  }

  displayPhotos() {
    this.photos = this.dishToDisplay.photos;
    this.photos.forEach(p => {
      let photo = {
        image: p,
        thumbImage: p
      }
      this.imageObject.push(photo);
    });
    console.log(this.imageObject);
  }


}

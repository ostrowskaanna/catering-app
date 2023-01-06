import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent {

  dishesRef: Observable<any>;

  constructor(public service: DataService, private db: AngularFirestore) {
    this.getSmallestPrice();
    this.getBiggestPrice();
    this.dishesRef = db.collection('dishes').snapshotChanges().pipe(map(dishes => dishes.map(dish => {
      const data = dish.payload.doc.data();
      const id = dish.payload.doc.id;
      return {id, data};
    })));

    this.dishesRef.subscribe(dishes => console.log(dishes));
  }


  getSmallestPrice() {
    //this.service.smallestPrice = Math.min(...this.dishesRef.map(dish => dish.price));
  }

  getBiggestPrice() {
    //this.service.biggestPrice = Math.max(...this.dishes.map(dish => dish.price));
  }

  addDish() { //TO DO !!!!!!!!!!
    console.log("here form for adding new dish");
  }

  deleteDish(id: number) { //TO DO!!!!!!!!!
    let localId = -1;
    console.log("in parent");
    this.dishesRef.subscribe(dishes => dishes.forEach((dish: any) => {
      console.log(dish);
      localId++;
      if(dish.id == id){
        console.log("id found");
        //delete from DB soon
        //delete from order
        while(this.service.checkIfDishAddedToOrder(dish.id) > 0){ 
          const dishTmp = {
            id: dish.id,
            name: dish.data.name,
            price: dish.data.price,
            number: 1
          }
          this.service.removeDishFromOrder(dishTmp);
          this.service.dishCounter--;
        }  
      }  
    }));
  }

}


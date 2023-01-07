import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { getStorage, ref, getDownloadURL, listAll, StorageReference } from 'firebase/storage';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent {

  dishesRef: Observable<any>;
  storage = getStorage();
  allUrls: string[] = [];

  constructor(public service: DataService, private db: AngularFirestore) {
    this.dishesRef = db.collection('dishes').snapshotChanges().pipe(map(dishes => dishes.map(dish => {
      const data = dish.payload.doc.data();
      const id = dish.payload.doc.id;
      return {id, data};
    })));
    this.getSmallestPrice(this.dishesRef);
    this.getBiggestPrice(this.dishesRef);
    this.service.storage = this.storage;

    // this.dishesRef.subscribe(dishes => { 
    //   console.log(dishes);
    //   this.service.dishesInDB = dishes.length;
    //   dishes.forEach((dish: any) => {
    //     //console.log(dish.data.photos);
    //     //const imgRef = ref(this.storage, dish.data.photos[0]);
    //     //console.log(imgRef.toString());
    //     //const url = this.downloadURL(dish.data.photos);
    //   });
    // });


    // const imagesRef = ref(this.storage, 'images');
    // console.log(imagesRef);
    // listAll(imagesRef).then((res) => {
    //   res.items.forEach((imageRef) => {
    //     console.log(imageRef);
    //     getDownloadURL(imageRef).then(url => {
    //       console.log(url);
    //     });
    //   })}).catch((err) => console.log(err)); 

  }


  downloadURL(photos: any) {
    const imgRef = ref(this.storage, photos[0]);
    getDownloadURL(imgRef).then(url => {
      console.log(url);
    }).catch(err => console.log(err));
    return imgRef.toString();
  }

  getSmallestPrice(dishesRef: Observable<any>) {
    dishesRef.subscribe(dishes => {
      this.service.smallestPrice = Math.min(...dishes.map((dish: any) => dish.data.price));
    })
  }

  getBiggestPrice(dishesRef: Observable<any>) {
    dishesRef.subscribe(dishes => {
      this.service.biggestPrice = Math.max(...dishes.map((dish: any) => dish.data.price));
    })
  }

  addDish() { //TO DO !!!!!!!!!!
    console.log("here form for adding new dish");
  }

  deleteDish(id: number) { 
    let localId = -1;
    console.log("in parent");
    this.dishesRef.subscribe(dishes => dishes.forEach((dish: any) => {
      console.log(dish);
      localId++;
      if(dish.id == id){
        console.log("id found");
        //delete from DB and delete dish card TO DO!!!!!!!!!!!!!!!!!!!

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


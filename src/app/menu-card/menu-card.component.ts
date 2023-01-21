import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DetailsComponent } from '../details/details.component';
import { MenuContainerComponent } from '../menu-container/menu-container.component';
import { getStorage, ref, getDownloadURL, listAll, StorageReference } from 'firebase/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { updateDoc, arrayUnion, doc, getFirestore } from 'firebase/firestore';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  constructor(public service: DataService, public dialog: MatDialog, private fs: AngularFireStorage, private db: AngularFirestore, private dbModule: AngularFireModule) {}

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
  
  @Input() isMinPrice: boolean = false;
  @Input() isMaxPrice: boolean = false;

  async ngOnInit() {

    //tu było pobieranieurl na biezaco ale jednka mam je w bazie
    // const imgRef = this.fs.ref(this.allPhotos[0]);
    // imgRef.getDownloadURL().subscribe(url => {
    //   console.log(url);
    //   this.dishPhoto = url;
    // })
    this.service.addedDishes.forEach(dish => {
      if(dish.id == this.dishId) {
        this.dishLocalCounter += dish.number;
        this.dishQuantity -= dish.number;
      }
    })
  }

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
      this.service.removeDishFromOrder(dish);
    }
  }

  @Output() newItemEvent = new EventEmitter<number>();

  removeDishFromDB() {
    console.log("in child id: " + this.dishId);
    this.newItemEvent.emit(this.dishId);

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    //dialogConfig.disableClose = true;
    this.dialog.open(DetailsComponent, dialogConfig);
  }

  showDishDetails() {
    this.service.dishToDisplay = null;
    console.log(this.dishName + " in menu-card");
    const dish = {
      id: this.dishId,
      name: this.dishName,
      origin: this.dishOrigin, 
      type: this.dishType,
      photos: this.allPhotos
    }
    this.service.dishToDisplay = dish;
   // await this.addURLs();
    this.service.currentDishRef = this.db.collection('dishes').doc(`${this.dishId}`);

    this.openDialog();
  }

  // async addURLs(): Promise<void> {
  //   const dishRef = this.db.collection('dishes').doc(`${this.dishId}`);

  //   this.service.imageObject.splice(0);
  //   this.allPhotos.forEach(photo => {
  //     const imgRef = ref(this.service.storage, photo);
  //     getDownloadURL(imgRef).then(downloadURL => {
  //       dishRef.update({ url: arrayUnion(downloadURL) })
  //     }).catch(err => console.log(err));
  //   });
  // }
}

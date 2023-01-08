import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DetailsComponent } from '../details/details.component';
import { MenuContainerComponent } from '../menu-container/menu-container.component';
import { getStorage, ref, getDownloadURL, listAll, StorageReference } from 'firebase/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  constructor(public service: DataService, public dialog: MatDialog, private fs: AngularFireStorage) {}

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
  
  async ngOnInit() {
    // const imgRef = ref(this.service.storage, this.allPhotos[0]);
    // getDownloadURL(imgRef).then(url => {
    //   this.dishPhoto = url.toString();
    // });
    const imgRef = this.fs.ref(this.allPhotos[0]);
    await imgRef.getDownloadURL().subscribe(url => {
      this.dishPhoto = url;
    })

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
    const dish = {
      id: this.dishId,
      name: this.dishName,
      origin: this.dishOrigin, 
      type: this.dishType,
      photos: this.allPhotos
    }
    this.service.dishToDisplay = dish;
    this.allPhotos.forEach(photo => {
      const imgRef = ref(this.service.storage, photo);
      getDownloadURL(imgRef).then(url => {
        let photo = {
              image: url,
              thumbImage: url
            }
            this.service.imageObject.push(photo); 
      }).catch(err => console.log(err));
    });
    console.log(this.service.imageObject);
    this.openDialog();
    //this.service.displayPhotos();
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { getStorage, ref, uploadBytes} from 'firebase/storage';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent {

  origins = ['italy', 'great britain', 'asia', 'usa', 'spain'];
  types = ['breakfast', 'dinner', 'dessert', 'snack'];
  uploadedImages: string[] = [];
  storage = getStorage();

  constructor(public service: DataService, public dialog: MatDialog, private db: AngularFirestore, private http: HttpClient){}

  closeDialog(){
    this.dialog.closeAll();
  }

  addNewDish(form: any) {
    console.log(form);
    //check if name not taken TO DO

    if(form.valid)
     this.closeDialog();
    //add dish to DB
    const dishesRef = this.db.collection('dishes');
    const data = form.value;
    data['photos'] = this.uploadedImages;
    dishesRef.add({...form.value})
    //add images to storage TO DO
    this.uploadedImages.forEach(img => {
      const imgRef = ref(this.storage, img);
      //here upload file to imgRef
    })
  }

  onFileSelected(event: any) {
    this.uploadedImages.splice(0);
    Array.from(event.target.files).forEach((file: any) => {
      this.uploadedImages.push('images/' + file.name);
    });

  }

}

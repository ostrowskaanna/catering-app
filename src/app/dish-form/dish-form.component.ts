import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { getStorage, ref, uploadBytes} from 'firebase/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent {

  origins = ['italy', 'great britain', 'asia', 'usa', 'spain'];
  types = ['breakfast', 'dinner', 'dessert', 'snack'];
  uploadedImagesPaths: string[] = [];
  uploadedFiles: File[] = []
  storage = getStorage();

  constructor(public service: DataService, public dialog: MatDialog, private db: AngularFirestore, private fs: AngularFireStorage, private http: HttpClient){}

  closeDialog(){
    this.dialog.closeAll();
  }

  addNewDish(form: any) {
    console.log(form.value);

    //check if dish name not taken TO DO
    // this.service.dishesRef.forEach(dishes => {
    //   dishes.forEach((dish: any) => {
    //     if(dish.data.name == form.value.name)
    //       form.valid = false;
    //   })
    // })

    if(form.valid){
     this.closeDialog();

     const dishesRef = this.db.collection('dishes');
     const data = form.value;
     data['photos'] = this.uploadedImagesPaths;
     console.log(data);

      //add images to storage
      let add = true;
      this.uploadedImagesPaths.forEach( async (imgPath, index) => {
        const imgUploaded = this.fs.upload(imgPath, this.uploadedFiles[index]).snapshotChanges();
        imgUploaded.subscribe(() => {
          if(add) {
            //add dish to DB
            dishesRef.add({...data});
            add = false;
          }
        })
      })
    }
}


  onFileSelected(event: any) {
    this.uploadedImagesPaths.splice(0);
    Array.from(event.target.files).forEach((file: any) => {
      console.log(file);
      console.log(file.name);
      this.uploadedImagesPaths.push('images/' + Math.random() + file.name);
      this.uploadedFiles.push(file);
    });
  }

}

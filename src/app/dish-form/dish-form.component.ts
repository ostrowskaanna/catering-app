import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { getStorage, ref, uploadBytes} from 'firebase/storage';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';

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
  namesTaken: string[] = [];
  constructor(public service: DataService, public dialog: MatDialog, private db: AngularFirestore, private fs: AngularFireStorage, private http: HttpClient){}

  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
    this.namesTaken.splice(0);
    this.service.dishesRef.forEach(dishes => {
      dishes.forEach((dish: any) => {
        this.namesTaken.push(dish.data.name);
      })
    })
  }

  async addNewDish(form: any) {

    const dishesRef = this.db.collection('dishes');
    const data = form.value;
    data['photos'] = this.uploadedImagesPaths;
    console.log(data);

    let unique = true;
    if(this.namesTaken.includes(form.value.name))
      unique = false;

    if(form.valid && unique){
      this.closeDialog();
 
      //add first image to storage
      let imgRef = this.fs.ref(this.uploadedImagesPaths[0]);
      let task = this.fs.upload(this.uploadedImagesPaths[0], this.uploadedFiles[0]);
      task.snapshotChanges().pipe(
        finalize(() => {
          imgRef.getDownloadURL().subscribe(downloadURL => {
            console.log(downloadURL);
            data['url'] = [downloadURL];
            dishesRef.add({...data});
            console.log("data uploaded");
            this.uploadedImagesPaths.splice(0, 1);
            this.uploadedImagesPaths.forEach((path, index) => {
              this.fs.upload(path, this.uploadedFiles[index]);
            });
          })
        })
      ).subscribe();
    }

    else if(!unique)
      alert("we already have this dish in the menu :(");

  }

  onFileSelected(event: any) {
    this.uploadedImagesPaths.splice(0);
    Array.from(event.target.files).forEach((file: any) => {
      this.uploadedImagesPaths.push('images/' + Math.random() + file.name);
      this.uploadedFiles.push(file);
    });
    console.log(this.uploadedImagesPaths);
  }

}

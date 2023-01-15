import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatOptgroup } from '@angular/material/core';
import { filter, map, Observable } from 'rxjs';

@Pipe({
  name: 'filterDishes'
})
export class FilterDishesPipe implements PipeTransform {

  constructor(private db: AngularFirestore) {}

  transform(dishesRef: Observable<any>, filters: {[key: string]: any}): Observable<any> {
    //TO DO
    // let filtered = this.db.collection('dishes').snapshotChanges().pipe(map(dishes => filter((dish: any) => dish.origin == 'italy'))).subscribe(dishes => map((dish: any) => {
    //   const data = dish.payload.doc.data();
    //   const id = dish.payload.doc.id;
    //   return {id, data};
    // }))
    // return filtered;
    return dishesRef;
  }
}




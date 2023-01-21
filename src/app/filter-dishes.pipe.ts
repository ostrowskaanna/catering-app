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
    let currFilter = null;
    for(let filter in filters){
      currFilter = filter;
    }
    if(currFilter == 'origin'){
      console.log("origin");
      return dishesRef.pipe(
        map(dishes => 
          dishes.filter((dish: any) => (filters['origin'] != '' ? dish.data.origin == filters['origin'] : dish.data.origin)))
      );
    }
    else if(currFilter == 'type'){
      console.log("type");
      return dishesRef.pipe(
        map(dishes => 
          dishes.filter((dish: any) => (filters['type'] != '' ? dish.data.type == filters['type'] : dish.data.type)))
      );
    }
    else if(currFilter == 'minPrice'){
      console.log("minPrice");
      return dishesRef.pipe(
        map(dishes => 
          dishes.filter((dish: any) => (filters['minPrice'] != -1 ? dish.data.price >= filters['minPrice'] : dish.data.price)))
      );
    }
    else {
      console.log("maxPrice");
      return dishesRef.pipe(
        map(dishes => 
          dishes.filter((dish: any) => (filters['maxPrice'] != -1 ? dish.data.price <= filters['maxPrice'] : dish.data.price)))
      );
    }
  }
}




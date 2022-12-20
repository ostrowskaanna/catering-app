import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dishCounter = 0;
  smallestPrice = 1000;
  biggestPrice = 0;
}

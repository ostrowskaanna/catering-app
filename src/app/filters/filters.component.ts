import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  origins = ['italy', 'great britain', 'asia', 'usa', 'spain'];
  types = ['breakfast', 'dinner', 'dessert', 'snack'];
  minPrice = 0;
  maxPrice = 100;

  constructor(public service: DataService) { }

  originSelected(event : any) {
    console.log(event.target.value);
    this.service.originSelected = event.target.value;
  }

  typeSelected(event : any) {
    console.log(event.target.value);
    this.service.typeSelected = event.target.value;
  }

  minPriceSelected(event: any) {
    this.minPrice = event.target.value;
    this.service.minPriceSelected = event.target.value;
  }

  maxPriceSelected(event: any) {
    this.maxPrice = event.target.value;
    this.service.maxPriceSelected = event.target.value;
  }

}

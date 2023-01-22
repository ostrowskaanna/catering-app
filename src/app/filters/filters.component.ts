import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  origins = ['', 'italy', 'great britain', 'asia', 'usa', 'spain'];
  types = ['', 'breakfast', 'dinner', 'dessert', 'snack'];
  minPrice: number = 1;
  maxPrice: number = 20;


  constructor(public service: DataService) { 
    //this.minPrice = this.service.smallestPrice;
    //this.maxPrice = this.service.biggestPrice;
  }

  //TO DO add parent component refreshing 

  originSelected(event : any) {
    this.service.originSelected = event.target.value;
  }

  typeSelected(event : any) {
    this.service.typeSelected = event.target.value;
  }

  minPriceSelected(event: any) {
    this.minPrice = event.target.value;
    console.log(this.minPrice);
    this.service.minPriceSelected = event.target.value;
  }

  maxPriceSelected(event: any) {
    this.maxPrice = event.target.value;
    console.log(this.maxPrice);
    this.service.maxPriceSelected = event.target.value;
  }

}

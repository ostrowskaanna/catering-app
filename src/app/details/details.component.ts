import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MenuContainerComponent } from '../menu-container/menu-container.component';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {

  constructor(public service: DataService) {}
  @Input() dish!: any;
  ngOnInit() {
    this.dish = this.service.dishToDisplay;
    console.log(this.dish.name + " in details");
    console.log(this.dish.photos);
    console.log(this.service.currentDishRef);
    
  }
}

import { Component, ViewEncapsulation, Input } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import { DataService } from '../data.service';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent {
  constructor(public service: DataService) {}
  @Input() dish!: any;
  ngOnInit() {
    this.dish = this.service.dishToDisplay;
    
  }
}

import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MenuContainerComponent } from '../menu-container/menu-container.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(public service: DataService) {}
  @Input() dish!: any;
  photos: string[] = [];
  imageObject: Array<object> = [];
  ngOnInit() {
    this.dish = this.service.dishToDisplay;
    this.imageObject = this.service.imageObject;
    // this.photos = this.dish.photos;
    // console.log(this.photos);
    // this.photos.forEach(p => {
    //   let photo = {
    //     image: p,
    //     thumbImage: p
    //   }
    //   this.imageObject.push(photo);
    // });
  }
}

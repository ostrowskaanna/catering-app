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
  photos: any[] = [];
  ngOnInit() {
  this.dish = this.service.dishToDisplay;
  }
}

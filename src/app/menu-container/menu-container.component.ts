import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent {
  dishes = [
    { id: 0, name: 'pizza margherita', origin: 'it', type: 'main course', photoUrl: '', quantity: 20, price: 7 },
    { id: 0, name: 'spaghetti bolognese', origin: 'it', type: 'main course', photoUrl: '', quantity: 10, price: 12 }
  ]
}


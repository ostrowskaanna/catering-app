import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent {
  dishes = [
    { 
      id: 0, 
      name: 'pizza margherita', 
      origin: 'it', 
      type: 'dinner', 
      photoUrl: ['assets/images/pizza-margherita0.jpg', 'assets/images/pizza-margherita1.jpg', 'assets/images/pizza-margherita1.jpg'], 
      quantity: 20, 
      price: 7 
    },
    { 
      id: 1, 
      name: 'spaghetti bolognese', 
      origin: 'it', 
      type: 'dinner', 
      photoUrl: ['assets/images/spaghetti-bolognese0.jpg', 'assets/images/spaghetti-bolognese1.jpg', 'assets/images/spaghetti-bolognese2.jpg'], 
      quantity: 20, 
      price: 12 
    },
    { 
      id: 2, 
      name: 'english breakfast', 
      origin: 'en', 
      type: 'breakfast', 
      photoUrl: ['assets/images/english-breakfast0.jpg', 'assets/images/english-breakfast1.jpg', 'assets/images/english-breakfast2.jpg'], 
      quantity: 30, 
      price: 8 
    },
    { 
      id: 3, 
      name: 'shakshuka', 
      origin: 'asia', 
      type: 'breakfast', 
      photoUrl: ['assets/images/shakshuka0.jpg', 'assets/images/shakshuka1.jpg', 'assets/images/shakhuka2.jpg'], 
      quantity: 30, 
      price: 8 
    },
    { 
      id: 4, 
      name: 'fish and chips', 
      origin: 'en', 
      type: 'dinner', 
      photoUrl: ['assets/images/fish-and-chips0.jpg', 'assets/images/fish-and-chips1.jpg', 'assets/images/fish-and-chips2.jpg'], 
      quantity: 15, 
      price: 9 
    },
    { 
      id: 5, 
      name: 'pad thai', 
      origin: 'asia', 
      type: 'dinner', 
      photoUrl: ['assets/images/pad-thai0.jpg', 'assets/images/pad-thai1.jpg', 'assets/images/pad-thai2.jpg'], 
      quantity: 12, 
      price: 7.5 
    },
    { 
      id: 6, 
      name: 'tiramisu', 
      origin: 'it', 
      type: 'dessert', 
      photoUrl: ['assets/images/tiramisu0.jpg', 'assets/images/tiramisu1.jpg', 'assets/images/tiramisu2.jpg'], 
      quantity: 18, 
      price: 4 
    }
  ]
}


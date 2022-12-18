import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  @Input() dishName: string | undefined;
  @Input() dishPhoto: string | undefined;
  @Input() dishQuantity: number | undefined;
  @Input() dishPrice: number | undefined;
}

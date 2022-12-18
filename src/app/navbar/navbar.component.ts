import { makeBindingParser } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faShoppingCart = faShoppingCart;
  logoUrl: string = "assets/images/logo.png";
  @ViewChild('main') mainPageButton!: ElementRef;
  onClick(event: any) {
    //change bg color
    event.target.style['text-decoration'] = 'underline';
    event.target.style['text-underline-offset'] = '5px';
  }
}

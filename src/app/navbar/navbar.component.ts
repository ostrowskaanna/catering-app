import { makeBindingParser } from '@angular/compiler';
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(public service: DataService, public dialog: MatDialog) {}

  faShoppingCart = faShoppingCart;
  logoUrl: string = "assets/images/logo2.png";

  ngOnInit(){
    let elDis = document.getElementById('main');
    this.service.displayedEl = elDis;
    if(this.service.displayedEl){
      this.service.displayedEl.style.textDecoration = 'underline';
    }
  }

  changeUnderline(event: any) {
    if(this.service.displayedEl){
      this.service.displayedEl.style.textDecoration = 'none';
    }
    event.target.style['text-decoration'] = 'underline';
    this.service.displayedEl = event.target;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(OrderComponent, dialogConfig);
  }

  showOrder() {
    this.openDialog();
  }

}

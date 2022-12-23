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

  onClick(event: any) {
    //change bg color
    event.target.style['text-decoration'] = 'underline';
    event.target.style['text-underline-offset'] = '5px';
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    //dialogConfig.disableClose = true;
    this.dialog.open(OrderComponent, dialogConfig);
  }

  showOrder() {
    this.openDialog();
  }

}

import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(public service: DataService, public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
    let elDis = document.getElementById('menu');
    if(elDis){
      elDis.style.textDecoration = 'underline';
    }
    if(this.service.displayedEl){
      this.service.displayedEl.style.textDecoration = 'none';
    }
    this.service.displayedEl = elDis;
  }

  goToPaymentPage() {
    this.closeDialog();
    if(this.service.displayedEl)
      this.service.displayedEl.style.textDecoration = 'none';
    this.service.displayedEl = null;
  }

}

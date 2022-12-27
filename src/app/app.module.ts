import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuCardComponent,
    MenuContainerComponent,
    OrderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderComponent]
})
export class AppModule { }

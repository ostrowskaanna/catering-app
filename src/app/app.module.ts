import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgImageSliderModule } from 'ng-image-slider';

import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { PaymentComponent } from './payment/payment.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'menu', component: MenuContainerComponent },
  { path: 'shipping', component: ShippingInfoComponent },
  { path: 'contact', component: ContactInfoComponent },
  { path: 'client-panel', component: ClientPanelComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuCardComponent,
    MenuContainerComponent,
    OrderComponent,
    DetailsComponent,
    PageNotFoundComponent,
    MainPageComponent,
    ShippingInfoComponent,
    ContactInfoComponent,
    ClientPanelComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgImageSliderModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderComponent]
})

export class AppModule { 
}

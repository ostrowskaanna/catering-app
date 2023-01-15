import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuCardComponent } from './menu-card/menu-card.component';
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
import { DishFormComponent } from './dish-form/dish-form.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { FilterDishesPipe } from './filter-dishes.pipe';
import { FiltersComponent } from './filters/filters.component';

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
    PaymentComponent,
    DishFormComponent,
    ImgSliderComponent,
    FilterDishesPipe,
    FiltersComponent
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
    AngularFirestoreModule,
    HttpClientModule,
    SwiperModule,
    NgxPaginationModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderComponent]
})

export class AppModule { 
}
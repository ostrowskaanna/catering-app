import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuContainerComponent } from './menu-container/menu-container.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private router: Router){}
  ngOnInit(){
    this.router.navigate(['main']);
  }
}

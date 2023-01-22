import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private router: Router, public authService: AuthService){}
  ngOnInit(){
    this.router.navigate(['main']);
    this.authService.SignOut();
  }
}

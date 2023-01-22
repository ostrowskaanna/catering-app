import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-panel-logged-in',
  templateUrl: './client-panel-logged-in.component.html',
  styleUrls: ['./client-panel-logged-in.component.css']
})
export class ClientPanelLoggedInComponent {
  constructor(public authService: AuthService, public router: Router) {

  }

  logout() {
    this.authService.SignOut().then(() => {
      this.router.navigate(['client-panel']);
      console.log(this.authService.userData.email);
    });
  }

}

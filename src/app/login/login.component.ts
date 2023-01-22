import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) {}
  login(form: any) {
    console.log(form.valid);
    if(form.valid) {
      console.log(form.value);
      this.authService.SignIn(form.value['email'], form.value['passwd']);
    }
  };

}

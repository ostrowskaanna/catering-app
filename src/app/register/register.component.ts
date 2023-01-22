import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public authService: AuthService) {

  }

  register(form: any) {
    console.log(form.valid);
    if(form.valid && form.value['passwd']==form.value['conf-passwd']) {
      this.authService.SignUp(form.value['email'], form.value['passwd']);

    }
  }

}

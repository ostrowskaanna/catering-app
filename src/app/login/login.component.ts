import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {}
  login(form: any) {
    console.log(form.valid);
    if(form.valid) {
      console.log(form.value);
    }
  };

}

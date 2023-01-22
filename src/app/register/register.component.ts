import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() {

  }

  register(form: any) {
    console.log(form.valid);
    if(form.valid) {
      console.log(form.value);
    }
  }

}

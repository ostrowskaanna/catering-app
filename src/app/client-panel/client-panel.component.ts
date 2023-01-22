import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css']
})
export class ClientPanelComponent {

  loginForm: any;
  registerForm: any;
  info: any;
  button: any;
  linkDiv: any;
  currDisplay: string = 'register';

  constructor(public authService: AuthService){
    //this.checkIfLoggedIn();
  }


  changeDisplay() {
    this.loginForm = document.getElementById('login');
    this.registerForm = document.getElementById('register');
    this.info = document.getElementById('info');
    this.button = document.getElementById('button');
    this.linkDiv = document.getElementById('link');
    if(this.loginForm && this.registerForm && this.info && this.button){
      console.log("change display");
      if(this.currDisplay == 'register') {
        console.log("changing to login");
        this.loginForm.style.display = 'block';
        this.registerForm.style.display = 'none';
        this.info.innerHTML = "Don't have an account yet?";
        this.button.innerHTML = "Register";
        this.currDisplay = 'login';
      }
      else if(this.currDisplay == 'login') {
        console.log("changing to register");
        this.loginForm.style.display = 'none';
        this.registerForm.style.display = 'block';
        this.info.innerHTML = "Already have an account?";
        this.button.innerHTML = "Login";
        this.currDisplay = 'register';
      }
    }
  }


}

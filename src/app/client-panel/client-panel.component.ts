import { Component } from '@angular/core';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css']
})
export class ClientPanelComponent {

  constructor(){}

  currDisplay: string = 'register';

  changeDisplay() {
    let loginForm = document.getElementById('login');
    let registerForm = document.getElementById('register');
    let info = document.getElementById('info');
    let button = document.getElementById('button');
    if(loginForm && registerForm && info && button){
      if(this.currDisplay == 'register') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        info.innerHTML = "Don't have an account yet?";
        button.innerHTML = "Register";
      }
      else if(this.currDisplay == 'login') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        info.innerHTML = "Already have an account?";
        button.innerHTML = "Login";
      }
    }
  }

}

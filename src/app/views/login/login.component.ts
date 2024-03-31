import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Implemente a lógica de login aqui
    //console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}

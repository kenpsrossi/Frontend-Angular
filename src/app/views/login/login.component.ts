// Importando o componente do Angular
import { Component } from '@angular/core';

// Decorador que define que a classe a seguir é um componente do Angular
@Component({
  // Seletor CSS que será usado para inserir este componente em um template HTML
  selector: 'app-login',
  // Caminho para o arquivo HTML que define a visualização deste componente
  templateUrl: './login.component.html',
  // Caminho para o arquivo CSS que define os estilos aplicados a este componente
  styleUrls: ['./login.component.scss']
})

// Classe que define o comportamento do componente Login
export class LoginComponent {
  // Variável para armazenar o nome de usuário inserido
  username: string = '';
  // Variável para armazenar a senha inserida
  password: string = '';

  // Método que será chamado quando o formulário for submetido
  onSubmit() {
    // Implemente a lógica de login aqui

    // Imprime o nome de usuário e a senha no console
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
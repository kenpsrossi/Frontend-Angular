import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        // Login bem-sucedido, redirecione para a página de menu ou faça qualquer outra ação necessária
        console.log('Login bem-sucedido');
        // Limpa a mensagem de erro
        this.errorMessage = '';
      },
      error => {
        // Login falhou, exiba mensagem de erro
        this.errorMessage = 'Credenciais inválidas';
        console.error('Erro durante o login:', error);
      }
    );
  }
}

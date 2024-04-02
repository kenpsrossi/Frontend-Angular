// Importa o componente do Angular
import { Component } from '@angular/core';

// Decorador que define as propriedades do componente
@Component({
  // Define o seletor do componente, que é usado para inserir o componente em outros templates
  selector: 'app-menu',
  // Define o caminho para o template HTML do componente
  templateUrl: './menu.component.html',
  // Define o caminho para o arquivo de estilos do componente
  styleUrls: ['./menu.component.scss']
})
// Define a classe do componente
export class MenuComponent {
  // Define uma propriedade pública que controla se o menu está colapsado ou não
  public isCollapsed = false;
}
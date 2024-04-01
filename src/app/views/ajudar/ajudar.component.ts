
// Importa o decorador Component do pacote @angular/core. Este decorador é usado para definir uma classe como um componente Angular.
import { Component } from '@angular/core';

// O decorador Component é usado para adicionar metadados a um componente Angular. 
// Esses metadados determinam como o componente é processado, instanciado e usado em tempo de execução.
@Component({
  // O seletor é uma string CSS que identifica este componente na árvore de componentes. 
  // Quando Angular encontra este seletor em um template HTML, ele substitui o elemento pelo template do componente.
  selector: 'app-ajudar',
  
  // A URL do template HTML deste componente. Este é o layout que o Angular usará para este componente.
  templateUrl: './ajudar.component.html',
  
  // A URL dos estilos CSS deste componente. Estes são os estilos que serão aplicados a este componente.
  styleUrls: ['./ajudar.component.scss']
})

// Esta é a classe do componente. Você pode adicionar propriedades e métodos a esta classe que podem ser usados no template e nos estilos do componente.
export class AjudarComponent {
  // Adicione a lógica do componente aqui. Por exemplo, você pode adicionar propriedades para dados de entrada e métodos para lidar com eventos.
}



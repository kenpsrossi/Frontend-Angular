import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Intervalo entre os slides
  public slideInterval = 2000;
  // Índice do slide ativo
  public activeSlideIndex = 0;
  // Título da página atual
  public pageCurrentTitle = 'Todos os animais disponiveis para adoção'; 

  // Array de slides
  public slides: Array<{image: string; text? : string}> = [
    {image: 'assets/imagens/cao-gato.jpeg',text: 'todos os animais'},
    {image: 'assets/imagens/caes.jpeg', text: 'Cães'},
    {image: 'assets/imagens/gatos.jpeg' , text: 'Gatos'},
  ];
}

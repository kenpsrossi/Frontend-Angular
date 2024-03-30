import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  
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


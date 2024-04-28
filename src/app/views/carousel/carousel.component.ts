// Importando os componentes necessários do Angular
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// Decorador que define que a classe a seguir é um componente do Angular
@Component({
  // Seletor CSS que será usado para inserir este componente em um template HTML
  selector: 'app-carousel',
  // Caminho para o arquivo HTML que define a visualização deste componente
  templateUrl: './carousel.component.html',
  // Caminho para o arquivo CSS que define os estilos aplicados a este componente
  styleUrls: ['./carousel.component.scss']
})

// Classe que define o comportamento do componente Carousel
export class CarouselComponent {
  // Intervalo entre os slides do carrossel
  public slideInterval = 2000;
  // Índice do slide ativo no carrossel
  public activeSlideIndex = 0;
  // Título da página atual
  public pageCurrentTitle = 'Todos os animais disponíveis para adoção'; 

  // Array de slides para o carrossel, cada um com uma imagem e um texto opcional
  public slides: Array<{image: string; text? : string}> = [
    {image: 'assets/imagens/cao-gato.jpeg', },
    {image: 'assets/imagens/caes.jpeg', },
    {image: 'assets/imagens/gatos.jpeg' ,},
  ];

  // Títulos das páginas, cada um associado a um caminho de rota
  private _pageTitles: Array<{path: RegExp; title: string}> = [
    {path: /^\/todos/, title: 'Todos os animais disponíveis para adoção'},
    {path: /^\/dogs/, title: 'Cachorros disponíveis para adoção'},
    {path: /^\/cats/, title: 'Gatos disponíveis para adoção'},
  ];

  // Construtor do componente, que recebe o roteador do Angular como dependência
  constructor(private readonly _router: Router) {
    // Inscreve-se para os eventos do roteador
    _router.events.subscribe(events => {
      // Verifica se o evento é do tipo NavigationEnd
      if (events instanceof NavigationEnd) {
        // Atualiza o título da página com base na URL atual
        this.pageCurrentTitle = this._pageTitles
        .find(pageTitle => pageTitle.path.test(_router.url))?.title ??
        'Animais disponíveis para adoção';
      }
    });
  }
}
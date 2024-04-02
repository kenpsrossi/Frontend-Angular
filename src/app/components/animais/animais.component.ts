import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import pets_data from 'src/app/data/pets-data';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']
})
export class AnimaisComponent {

  
  // Inicializa a lista de animais com os dados dos pets
  public animais: Array<Pet> = pets_data;

  constructor(private readonly _router: Router, private readonly _route: ActivatedRoute) {
    // Inscreve-se para os eventos do roteador
    _router.events.subscribe(events => {
      // Verifica se o evento é do tipo NavigationEnd
      if (events instanceof NavigationEnd) {
        // Remove a barra do início da URL
        const pathVariable = _router.url.replace('/', '');
        let especie: 'Cachorro' | 'Gato' | undefined;

        // Define o tipo de animal com base na URL
        switch (pathVariable) {
          case 'dogs':
            especie = 'Cachorro';
            break;
          case 'cats':
            especie = 'Gato';
            break;
        }

        // Filtra os animais com base no tipo
        this.animais = this.filterAnimalsPerEspecie(especie);
      }
    });
  }

  // Método para filtrar os animais com base no tipo
  private filterAnimalsPerEspecie(especie?: 'Cachorro' | 'Gato'): Array<Pet> {
    // Se o tipo não for definido, retorna todos os animais
    if (!especie) return pets_data;
    // Filtra os animais que correspondem ao tipo
    return pets_data.filter(animal => animal.especie === especie);
  }
} 
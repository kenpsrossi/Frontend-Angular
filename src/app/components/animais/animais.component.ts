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




/*
//Para integrar com back-end

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definição da interface Animal
export interface Animal {
  // definição da interface Animal
}

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']  
})
export class AnimaisComponent implements OnInit {
  // Array para armazenar os dados dos animais
  public animais: Animal[];

  // Colunas a serem exibidas na tabela
  displayedColumns: string[] = ['id', 'nome', 'tipo', 'idade', 'acao']; // atualize com suas colunas

  // Fonte de dados para a tabela
  dataSource: Animal[];

  // Injeção do serviço HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Faz uma solicitação GET para obter os dados dos animais
    this.getAnimais().subscribe(data => {
      // Quando os dados são recebidos, armazena-os na propriedade animais e na fonte de dados da tabela
      this.animais = data;
      this.dataSource = data;
    });
  }

  // Método para obter os dados dos animais do servidor
  getAnimais(): Observable<Animal[]> {
    // Faz uma solicitação GET para a URL da API e retorna um Observable
    return this.http.get<Animal[]>('http://localhost:3000/animais'); // substitua por sua URL de API
  }
}
*/








/*injetando o serviço HttpClient no construtor e usando-o para fazer uma solicitação GET para o servidor no método ngOnInit. 
A URL da API deve ser a URL do seu servidor onde os dados dos animais estão disponíveis. precisa substituir 'http://localhost:3000/animais'
pela URL real da API.certifique-se de que você importou o módulo HttpClientModule no módulo de aplicativo para poder usar o serviço HttpClient.
*/
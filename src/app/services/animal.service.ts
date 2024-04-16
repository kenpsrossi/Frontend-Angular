import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { BehaviorSubject } from 'rxjs';
import animaisData from '../data/pets-data';

// Decorador que define este arquivo como um serviço Angular
@Injectable({
  providedIn: 'root'
})

// Classe do serviço AnimalService
export class AnimalService {
  // Array que armazena os dados dos animais
  private animais: Pet[] = animaisData;

  // BehaviorSubject que armazena o estado atual dos animais
  private animais$ = new BehaviorSubject<Pet[]>(this.animais);

  // Método para obter os animais
  getAnimais() {
    // Retorna um Observable dos animais
    return this.animais$.asObservable();
  }

  // Método para adicionar um animal
  addAnimal(animal: Pet) {
    // Procura o animal pela matrícula
    const index = this.animais.findIndex(a => a.matricula === animal.matricula);

    // Se o animal não foi encontrado (index === -1), ele é adicionado
    if (index === -1) {
      this.animais.push(animal);
      this.animais$.next(this.animais);
      console.log('Animal adicionado:', animal);
    } else {
      console.log('Matrícula já existe. Animal não adicionado.');
    }

    console.log('Animais agora:', this.animais);
    return this.animais$;
  }

  // Método para editar um animal
  editAnimal(animal: Pet) {
    // Procura o animal pela matrícula
    const index = this.animais.findIndex(a => a.matricula === animal.matricula);

    // Se o animal foi encontrado (index !== -1), ele é editado
    if (index !== -1) {
      this.animais[index] = animal;
      this.animais$.next(this.animais);
      console.log('Animal editado:', animal);
    } else {
      console.log('Matrícula não encontrada. Animal não editado.');
    }

    console.log('Animais agora:', this.animais);
    return this.animais$;
  }

  // Método para deletar um animal
  deleteAnimal(matricula: string) {
    // Procura o animal pela matrícula
    const index = this.animais.findIndex(a => a.matricula === matricula);

    // Se o animal foi encontrado (index !== -1), ele é deletado
    if (index !== -1) {
      this.animais.splice(index, 1);
      this.animais$.next(this.animais);
      console.log('Animal deletado:', matricula);
    } else {
      console.log('Matrícula não encontrada. Animal não deletado.');
    }

    return this.animais$;
  }
}

// Para ============ "Integração back-end" ============((( + ou - EXEMPLO)))
//Código abaixo refatorado para integração com um back-end em JavaScript usando o HttpClient do Angular para fazer solicitações HTTP,
//ao back-end e fornecer métodos para obter, adicionar, editar e deletar adotantes.

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  // URL base para a API do servidor
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Método para obter os animais do servidor
  getAnimais(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/animais`);
  }

  // Método para adicionar um animal no servidor
  addAnimal(animal: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.baseUrl}/animais`, animal);
  }

  // Método para editar um animal no servidor
  editAnimal(animal: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/animais/${animal.matricula}`, animal);
  }

  // Método para deletar um animal no servidor
  deleteAnimal(matricula: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/animais/${matricula}`);
  }
}
*/

/* código agora faz chamadas HTTP para um back-end, em vez de manipular os dados localmente.
 As funções retornam Observables que emitem os dados quando a resposta é recebida do back-end.
 precisa substituir 'http://localhost:3000/adotantes' pela URL real do seu back-end.*/
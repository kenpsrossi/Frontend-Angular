import { Injectable } from '@angular/core';
import { Pet } from '../models/pet'; 
import { BehaviorSubject } from 'rxjs'; 
import petsData from '../data/pets-data'; 

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animais: Pet[] = petsData; // Inicializa a lista de animais com os dados importados
  private animais$ = new BehaviorSubject<Pet[]>(this.animais); // Cria um BehaviorSubject com a lista de animais inicial

  // Método para obter a lista de animais como um observable
  getAnimais() {
    return this.animais$.asObservable();
  }

  // Método para adicionar um animal à lista
  addAnimal(animal: Pet) {
    // Atribui um novo ID ao animal com base no último ID na lista
    animal.id = this.animais.length > 0 ? Math.max(...this.animais.map(a => a.id)) + 1 : 1;
    // Adiciona o animal à lista
    this.animais.push(animal);
    // Emite a nova lista de animais para todos os observadores
    this.animais$.next(this.animais);
    console.log('Animal adicionado:', animal);
    console.log('Animais agora:', this.animais);
    return this.animais$; // Retorna o observable da lista de animais
  }

  // Método para editar um animal na lista
  editAnimal(animal: Pet) {
    // Encontra o índice do animal na lista
    const index = this.animais.findIndex(a => a.id === animal.id);
    // Se o animal for encontrado na lista, atualiza-o
    if (index !== -1) {
      this.animais[index] = animal;
      // Emite a lista de animais atualizada para todos os observadores
      this.animais$.next(this.animais);
    }
    console.log('Animal editado:', animal);
    console.log('Animais agora:', this.animais);
    return this.animais$; // Retorna o observable da lista de animais
  }

  // Método para excluir um animal da lista
  deleteAnimal(id: number) {
    // Encontra o índice do animal na lista
    const index = this.animais.findIndex(a => a.id === id);
    // Se o animal for encontrado na lista, remove-o
    if (index !== -1) {
      this.animais.splice(index, 1);
      // Emite a lista de animais atualizada para todos os observadores
      this.animais$.next(this.animais);
    }
    return this.animais$; // Retorna o observable da lista de animais
  }
}


//====================================CAMPOS ATUALIZAR====================================
/*

import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { BehaviorSubject } from 'rxjs';
import animaisData from '../data/animais-data';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animais: Animal[] = animaisData;
  private animais$ = new BehaviorSubject<Animal[]>(this.animais);

  getAnimais() {
    return this.animais$.asObservable();
  }

  addAnimal(animal: Animal) {
    const index = this.animais.findIndex(a => a.matricula === animal.matricula);
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

  editAnimal(animal: Animal) {
    const index = this.animais.findIndex(a => a.matricula === animal.matricula);
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

  deleteAnimal(matricula: string) {
    const index = this.animais.findIndex(a => a.matricula === matricula);
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
============================================FIM================================================================ 

*/
import { Injectable } from '@angular/core';
import { Adotante } from '../models/adotante';
import { BehaviorSubject } from 'rxjs';
import adotantesData from '../data/adotantes-data';

@Injectable({
  providedIn: 'root' // Especificando que este serviço é fornecido no nível raiz da aplicação
})
export class AdotanteService {
  // Inicializando a lista de adotantes com os dados de exemplo
  private adotantes: Adotante[] = adotantesData;
  // Criando um BehaviorSubject para os adotantes, inicializado com os dados de exemplo
  private adotantes$ = new BehaviorSubject<Adotante[]>(this.adotantes);

  // Método para obter a lista de adotantes como um objeto observável
  getAdotantes() {
    return this.adotantes$.asObservable();
  }

  // Método para adicionar um novo adotante
  addAdotante(adotante: Adotante) {
    // Atribuindo um ID único ao novo adotante
    adotante.id = this.adotantes.length > 0 ? Math.max(...this.adotantes.map(a => a.id)) + 1 : 1;
    // Adicionando o novo adotante à lista
    this.adotantes.push(adotante);
    // Emitindo uma nova lista de adotantes através do BehaviorSubject
    this.adotantes$.next(this.adotantes);
    // Exibindo informações de log
    console.log('Adotante adicionado:', adotante);
    console.log('Adotantes agora:', this.adotantes);
    // Retornando o BehaviorSubject para permitir a inscrição
    return this.adotantes$;
  }

  // Método para editar um adotante existente
  editAdotante(adotante: Adotante) {
    // Encontrando o índice do adotante na lista
    const index = this.adotantes.findIndex(a => a.id === adotante.id);
    // Verificando se o adotante existe na lista
    if (index !== -1) {
      // Substituindo o adotante na lista pelo adotante editado
      this.adotantes[index] = adotante;
      // Emitindo uma nova lista de adotantes através do BehaviorSubject
      this.adotantes$.next(this.adotantes);
    }
    // Exibindo informações de log
    console.log('Adotante editado:', adotante);
    console.log('Adotantes agora:', this.adotantes);
    // Retornando o BehaviorSubject para permitir a inscrição
    return this.adotantes$;
  }

  // Método para excluir um adotante existente com base no ID
  deleteAdotante(id: number) {
    // Encontrando o índice do adotante na lista
    const index = this.adotantes.findIndex(a => a.id === id);
    // Verificando se o adotante existe na lista
    if (index !== -1) {
      // Removendo o adotante da lista
      this.adotantes.splice(index, 1);
      // Emitindo uma nova lista de adotantes através do BehaviorSubject
      this.adotantes$.next(this.adotantes);
    }
    // Retornando o BehaviorSubject para permitir a inscrição
    return this.adotantes$;
  }
}



/*
=======================================================ATUALIZAR CAMPOS======================================================================

import { Injectable } from '@angular/core';
import { Adotante } from '../models/adotante';
import { BehaviorSubject } from 'rxjs';
import adotantesData from '../data/adotantes-data';

@Injectable({
  providedIn: 'root'
})
export class AdotanteService {
  private adotantes: Adotante[] = adotantesData;
  private adotantes$ = new BehaviorSubject<Adotante[]>(this.adotantes);

  getAdotantes() {
    return this.adotantes$.asObservable();
  }

  addAdotante(adotante: Adotante) {
    const index = this.adotantes.findIndex(a => a.cpf === adotante.cpf);
    if (index === -1) {
      this.adotantes.push(adotante);
      this.adotantes$.next(this.adotantes);
      console.log('Adotante adicionado:', adotante);
    } else {
      console.log('CPF já existe. Adotante não adicionado.');
    }
    console.log('Adotantes agora:', this.adotantes);
    return this.adotantes$;
  }

  editAdotante(adotante: Adotante) {
    const index = this.adotantes.findIndex(a => a.cpf === adotante.cpf);
    if (index !== -1) {
      this.adotantes[index] = adotante;
      this.adotantes$.next(this.adotantes);
      console.log('Adotante editado:', adotante);
    } else {
      console.log('CPF não encontrado. Adotante não editado.');
    }
    console.log('Adotantes agora:', this.adotantes);
    return this.adotantes$;
  }

  deleteAdotante(cpf: string) {
    const index = this.adotantes.findIndex(a => a.cpf === cpf);
    if (index !== -1) {
      this.adotantes.splice(index, 1);
      this.adotantes$.next(this.adotantes);
      console.log('Adotante deletado:', cpf);
    } else {
      console.log('CPF não encontrado. Adotante não deletado.');
    }
    return this.adotantes$;
  }
}

===============================================================FIM===========================================================================

//Para integrar back-end 

// AdotanteService
import { Injectable } from '@angular/core';
import { Adotante } from '../models/adotante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdotanteService {
  // URL base para o back-end
  private baseUrl = 'http://localhost:3000/adotantes';

  constructor(private http: HttpClient) { }

  // Obter todos os adotantes do back-end
  getAdotantes(): Observable<Adotante[]> {
    return this.http.get<Adotante[]>(this.baseUrl);
  }

  // Adicionar um novo adotante ao back-end
  addAdotante(adotante: Adotante): Observable<Adotante> {
    return this.http.post<Adotante>(this.baseUrl, adotante);
  }

  // Editar um adotante existente no back-end
  editAdotante(adotante: Adotante): Observable<Adotante> {
    return this.http.put<Adotante>(${this.baseUrl}/${adotante.id}, adotante);
  }

  // Deletar um adotante do back-end
  deleteAdotante(id: number): Observable<void> {
    return this.http.delete<void>(${this.baseUrl}/${id});
  }
} */

/* código agora faz chamadas HTTP para um back-end, em vez de manipular os dados localmente.
 As funções retornam Observables que emitem os dados quando a resposta é recebida do back-end.
você precisa substituir 'http://localhost:3000/adotantes' pela URL real do seu back-end.*/
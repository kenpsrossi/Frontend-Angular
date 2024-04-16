import { Injectable } from '@angular/core';
import { Adotante } from '../models/adotante';
import { BehaviorSubject } from 'rxjs';
import adotantesData from '../data/adotantes-data';

// Decorador que define este arquivo como um serviço Angular
@Injectable({
  providedIn: 'root'
})

// Classe do serviço AdotanteService
export class AdotanteService {
  // Array que armazena os dados dos adotantes
  private adotantes: Adotante[] = adotantesData;

  // BehaviorSubject que armazena o estado atual dos adotantes
  private adotantes$ = new BehaviorSubject<Adotante[]>(this.adotantes);

  // Método para obter os adotantes
  getAdotantes() {
    // Retorna um Observable dos adotantes
    return this.adotantes$.asObservable();
  }

  // Método para adicionar um adotante
  addAdotante(adotante: Adotante) {
    // Procura o adotante pelo CPF
    const index = this.adotantes.findIndex(a => a.cpf === adotante.cpf);

    // Se o adotante não foi encontrado (index === -1), ele é adicionado
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

  // Método para editar um adotante
  editAdotante(adotante: Adotante) {
    // Procura o adotante pelo CPF
    const index = this.adotantes.findIndex(a => a.cpf === adotante.cpf);

    // Se o adotante foi encontrado (index !== -1), ele é editado
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

  // Método para deletar um adotante
  deleteAdotante(cpf: string) {
    // Procura o adotante pelo CPF
    const index = this.adotantes.findIndex(a => a.cpf === cpf);

    // Se o adotante foi encontrado (index !== -1), ele é deletado
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

// Para ============ "Integração back-end" ============((( + ou - EXEMPLO)))
//Código abaixo refatorado para integração com um back-end em JavaScript usando o HttpClient do Angular para fazer solicitações HTTP,
//ao back-end e fornecer métodos para obter, adicionar, editar e deletar adotantes.

/*
// Importando os módulos necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adotante } from '../models/adotante';
import { Observable } from 'rxjs';

// Decorador que define este arquivo como um serviço Angular
@Injectable({
  providedIn: 'root'
})

// Classe do serviço AdotanteService
export class AdotanteService {
  // URL do back-end
  private url = 'http://localhost:3000/adotantes';

  // Injetando o HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método para obter os adotantes
  getAdotantes(): Observable<Adotante[]> {
    // Faz uma solicitação GET para a URL do back-end e retorna um Observable dos adotantes
    return this.http.get<Adotante[]>(this.url);
  }

  // Método para adicionar um adotante
  addAdotante(adotante: Adotante): Observable<Adotante> {
    // Faz uma solicitação POST para a URL do back-end, enviando o adotante como solicitação
    // Retorna um Observable do adotante adicionado
    return this.http.post<Adotante>(this.url, adotante);
  }

  // Método para editar um adotante
  editAdotante(adotante: Adotante): Observable<Adotante> {
    // Faz uma solicitação PUT para a URL do back-end, enviando o adotante como solicitação
    // Retorna um Observable do adotante editado
    return this.http.put<Adotante>(`${this.url}/${adotante.cpf}`, adotante);
  }

  // Método para deletar um adotante
  deleteAdotante(cpf: string): Observable<{}> {
    // Faz uma solicitação DELETE para a URL do back-end
    // Retorna um Observable vazio
    return this.http.delete(`${this.url}/${cpf}`);
  }
}
*/

/* código agora faz chamadas HTTP para um back-end, em vez de manipular os dados localmente.
 As funções retornam Observables que emitem os dados quando a resposta é recebida do back-end.
 precisa substituir 'http://localhost:3000/adotantes' pela URL real do seu back-end.*/
 
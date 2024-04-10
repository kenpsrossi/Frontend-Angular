// AdotanteService
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
    adotante.id = this.adotantes.length > 0 ? Math.max(...this.adotantes.map(a => a.id)) + 1 : 1;
    this.adotantes.push(adotante);
    this.adotantes$.next(this.adotantes);
    console.log('Adotante adicionado:', adotante);
    console.log('Adotantes agora:', this.adotantes);
    return this.adotantes$;
  }

  editAdotante(adotante: Adotante) {
    const index = this.adotantes.findIndex(a => a.id === adotante.id);
    if (index !== -1) {
      this.adotantes[index] = adotante;
      this.adotantes$.next(this.adotantes);
    }
    console.log('Adotante editado:', adotante);
    console.log('Adotantes agora:', this.adotantes);
    return this.adotantes$;
  }

  deleteAdotante(id: number) {
    const index = this.adotantes.findIndex(a => a.id === id);
    if (index !== -1) {
      this.adotantes.splice(index, 1);
      this.adotantes$.next(this.adotantes);
    }
    return this.adotantes$;
  }
}


//Para integrar back-end  
/*
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
    return this.http.put<Adotante>(`${this.baseUrl}/${adotante.id}`, adotante);
  }

  // Deletar um adotante do back-end
  deleteAdotante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
} */

/* código agora faz chamadas HTTP para um back-end, em vez de manipular os dados localmente.
 As funções retornam Observables que emitem os dados quando a resposta é recebida do back-end.
você precisa substituir 'http://localhost:3000/adotantes' pela URL real do seu back-end.*/
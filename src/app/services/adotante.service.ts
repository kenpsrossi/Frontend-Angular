// adotante.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adotante } from '../models/adotante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdotanteService {
  private url = 'http://localhost:3000/adotante';

  constructor(private http: HttpClient) {}

  getAdotantes(): Observable<Adotante[]> {
    return this.http.get<Adotante[]>(this.url);
  }

  addAdotante(adotante: Adotante): Observable<Adotante> {
    return this.http.post<Adotante>(this.url, adotante);
  }

  editAdotante(adotante: Adotante): Observable<void> {
    return this.http.put<void>(`${this.url}/${adotante.cpf}`, adotante);
  }

  deleteAdotante(cpf: string): Observable<any> {
    return this.http.delete(`${this.url}/${cpf}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private Url = 'http://localhost:3000/animal'; // Base URL do seu back-end

  constructor(private http: HttpClient) { }

  // Método para obter os animais do servidor
  getAnimais(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.Url);
  }

  // Método para adicionar um animal no servidor
  addAnimal(animal: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.Url, animal);
  }

  // Método para editar um animal no servidor
  editAnimal(animal: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.Url}/${animal.matricula}`, animal);
  }

  // Método para deletar um animal no servidor
  deleteAnimal(matricula: string): Observable<any> {
    return this.http.delete(`${this.Url}/${matricula}`);
  }
}


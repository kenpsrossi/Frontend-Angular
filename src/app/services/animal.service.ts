import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animaisUrl = 'http://localhost:3000/animais'; // URL do seu back-end
  private animais$ = new BehaviorSubject<Pet[]>([]);

  constructor(private http: HttpClient) {
    this.fetchAnimais();
  }

  fetchAnimais() {
    this.http.get<Pet[]>(this.animaisUrl).pipe(
      tap(animais => this.animais$.next(animais))
    ).subscribe();
  }

  getAnimais(): Observable<Pet[]> {
    return this.animais$.asObservable();
  }

  addAnimal(animal: Pet) {
    this.http.post<Pet>(this.animaisUrl, animal).pipe(
      tap(() => this.fetchAnimais())
    ).subscribe();
  }

  editAnimal(animal: Pet) {
    const url = `${this.animaisUrl}/${animal.matricula}`;
    this.http.put<Pet>(url, animal).pipe(
      tap(() => this.fetchAnimais())
    ).subscribe();
  }

  deleteAnimal(matricula: string) {
    const url = `${this.animaisUrl}/${matricula}`;
    this.http.delete<Pet>(url).pipe(
      tap(() => this.fetchAnimais())
    ).subscribe();
  }
}
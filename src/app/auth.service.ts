import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Aqui você faria uma solicitação HTTP para autenticar o usuário
    // Por exemplo, você pode fazer uma solicitação POST para um endpoint de autenticação no seu backend
    // e retornar o resultado da solicitação HTTP como um Observable
    
    // Por enquanto, vamos apenas simular um login bem-sucedido
    if (username === 'usuario' && password === 'senha') {
      // Simula um login bem-sucedido
      return new Observable(observer => {
        observer.next('Usuário autenticado com sucesso');
        observer.complete();
      });
    } else {
      // Simula um login falhado
      return new Observable(observer => {
        observer.error('Credenciais inválidas');
      });
    }
  }
}

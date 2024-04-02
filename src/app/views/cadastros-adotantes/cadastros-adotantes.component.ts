// Importando o componente do Angular
import { Component } from '@angular/core';

// Decorador que define que a classe a seguir é um componente do Angular
@Component({
  // Seletor CSS que será usado para inserir este componente em um template HTML
  selector: 'app-cadastros-adotantes',
  // Caminho para o arquivo HTML que define a visualização deste componente
  templateUrl: './cadastros-adotantes.component.html',
  // Caminho para o arquivo CSS que define os estilos aplicados a este componente
  styleUrls: ['./cadastros-adotantes.component.scss']
})

// Classe que define o comportamento do componente CadastrosAdotantes
export class CadastrosAdotantesComponent {
  // Objeto que representa o adotante a ser cadastrado
  // Cada propriedade do objeto corresponde a um campo do formulário
  adotante = {
    id:  '',
    matricula: '',
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    estadoCivil: '',
    logradouro: '',
    cep: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: ''
  };

  // Método para lidar com o envio do formulário
  // Atualmente, apenas imprime o objeto adotante no console
  onSubmit() {
    console.log(this.adotante);
  }
}
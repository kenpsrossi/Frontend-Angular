// Importando o componente do Angular
import { Component } from '@angular/core';

// Decorador que define que a classe a seguir é um componente do Angular
@Component({
  // Seletor CSS que será usado para inserir este componente em um template HTML
  selector: 'app-cadastros-animais',
  // Caminho para o arquivo HTML que define a visualização deste componente
  templateUrl: './cadastros-animais.component.html',
  // Caminho para o arquivo CSS que define os estilos aplicados a este componente
  styleUrls: ['./cadastros-animais.component.scss']
})

// Classe que define o comportamento do componente CadastrosAnimais
export class CadastrosAnimaisComponent {
  // Objeto que representa o animal a ser cadastrado
  // Cada propriedade do objeto corresponde a um campo do formulário
  animal = {
    id:  '',
    matricula: '',
    nome: '',
    especie: '',
    pelagem: '',
    raca: '',
    sexo: '',
    castracao: '',
    vacinacao: '',
    localResgate: '',
    observacao: '',
    status: '',
    imagem: '',
    idade: ''
  };

  // Método para lidar com o envio do formulário
  // Atualmente, apenas imprime o objeto animal no console
  onSubmit() {
    console.log(this.animal);
  }
}
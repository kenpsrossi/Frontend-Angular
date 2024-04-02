// Importa o componente do Angular
import { Component } from '@angular/core';

// Decorador que marca uma classe como um componente Angular e fornece metadados de configuração
@Component({
  // O seletor CSS que identifica este componente no template
  selector: 'app-cadastros-animais',
  // O local do template do componente
  templateUrl: './cadastros-animais.component.html',
  // Os estilos específicos do componente
  styleUrls: ['./cadastros-animais.component.scss']
})

// Classe do componente
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

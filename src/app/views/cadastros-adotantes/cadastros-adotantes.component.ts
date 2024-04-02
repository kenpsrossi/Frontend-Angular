import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastros-adotantes',
  templateUrl: './cadastros-adotantes.component.html',
  styleUrls: ['./cadastros-adotantes.component.scss']
})
export class CadastrosAdotantesComponent {
    // Objeto que representa o animal a ser cadastrado
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
  // Atualmente, apenas imprime o objeto animal no console
  onSubmit() {
    console.log(this.adotante);
  }
}



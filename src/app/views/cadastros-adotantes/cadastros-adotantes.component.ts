// Importando os componentes necessários
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Adotante } from 'src/app/models/adotante';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdotanteService } from 'src/app/services/adotante.service';

// Função validadora para o CPF
function cpfLengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  // Verifica se o CPF tem exatamente 11 caracteres
  if (value && value.length !== 11) {
    return { cpfLength: true };
  }
  return null;
}

// Função validadora para o CEP
function cepValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  // Verifica se o CEP segue o padrão 00000-000
  const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
  const cepValid = cepPattern.test(value);
  if (!cepValid) {
    return { cepInvalid: true };
  }
  return null;
}

// Decorador que define que a classe a seguir é um componente do Angular
@Component({
  selector: 'app-cadastros-adotantes',
  templateUrl: './cadastros-adotantes.component.html',
  styleUrls: ['./cadastros-adotantes.component.scss']
})
export class CadastrosAdotantesComponent {
  // Definição do formulário
  profileForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    matricula: new FormControl(''),
    cpf: new FormControl('', [Validators.required, cpfLengthValidator]),
    email: new FormControl('', [Validators.required, Validators.email]), 
    telefone: new FormControl(''),
    estadoCivil: new FormControl(''),
    logradouro: new FormControl(''),
    cep: new FormControl('', [Validators.required, cepValidator]),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    complemento: new FormControl('')
   
  });

  // Array para armazenar os adotantes
  adotantes: Adotante[] = [];
  // Fonte de dados para a tabela
  dataSource: Adotante[] = [];

  // Injetando MatSnackBar no construtor
  constructor(private snackBar: MatSnackBar, private adotanteService: AdotanteService) { }

  // Método chamado quando o formulário é submetido
  onSubmit() {
    // Acessando o valor do formulário
    const formValues = this.profileForm.value;

    // Criando um novo adotante com os valores do formulário
    const newAdotante: Adotante = {
      id: this.adotantes.length + 1, // O id será o próximo número na sequência
      matricula: parseInt(formValues.matricula ?? '0'),
      nome: formValues.nome ?? '',
      cpf: formValues.cpf ?? '',
      email: formValues.email?? '',
      telefone: formValues.telefone ?? '',
      estadoCivil: formValues.estadoCivil ?? '',
      logradouro: formValues.logradouro ?? '',
      cep: formValues.cep ?? '',
      numero: formValues.numero ?? '',
      bairro: formValues.bairro ?? '',
      cidade: formValues.cidade ?? '',
      estado: formValues.estado ?? '',
      complemento: formValues.complemento?? ''
    };

    // Adicionando o novo adotante ao array
    this.adotantes.push(newAdotante);

    // Atualizando a fonte de dados da tabela
    this.dataSource = [...this.adotantes];
    
    // Adicionando o novo adotante ao serviço
    this.adotanteService.addAdotante(newAdotante);

    // Exibindo a mensagem de sucesso
    this.snackBar.open('Adotante cadastrado com sucesso!', 'Fechar', {
      duration: 5000, // A mensagem será exibida por 5 segundos
      verticalPosition: 'top', // A mensagem será exibida no topo da tela
    });

    // Resetando o formulário
    this.profileForm.reset();
  }
}
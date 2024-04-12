import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-cadastros-adotantes',
  templateUrl: './cadastros-adotantes.component.html',
  styleUrls: ['./cadastros-adotantes.component.scss']
})
export class CadastrosAdotantesComponent implements OnInit {
  // Definição do formulário
  profileForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]), // Campo nome com validação de requerido e mínimo de 8 caracteres
    matricula: new FormControl(''), // Campo matrícula
    cpf: new FormControl('', [Validators.required, cpfLengthValidator]), // Campo CPF com validação de requerido e validação de comprimento
    email: new FormControl('', [Validators.required, Validators.email]), // Campo email com validação de requerido e formato de email
    telefone: new FormControl(''), // Campo telefone
    estadoCivil: new FormControl(''), // Campo estado civil
    logradouro: new FormControl(''), // Campo logradouro
    cep: new FormControl('', [Validators.required, cepValidator]), // Campo CEP com validação de requerido e formato de CEP
    numero: new FormControl(''), // Campo número
    bairro: new FormControl(''), // Campo bairro
    cidade: new FormControl(''), // Campo cidade
    estado: new FormControl(''), // Campo estado
    complemento: new FormControl('') // Campo complemento
  });

  // Fonte de dados para a tabela
  dataSource: Adotante[] = [];

  // Injetando MatSnackBar e AdotanteService no construtor
  constructor(private snackBar: MatSnackBar, private adotanteService: AdotanteService) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Inicializa a fonte de dados da tabela com os adotantes do serviço
    this.adotanteService.getAdotantes().subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  // Método chamado quando o formulário é submetido
  onSubmit() {
    // Acessando o valor do formulário
    const formValues = this.profileForm.value;

    // Criando um novo adotante com os valores do formulário
    const newAdotante: Adotante = {
      id: 0, // O id será gerado pelo serviço
      matricula: parseInt(formValues.matricula ?? '0'), // Convertendo a matrícula para número
      nome: formValues.nome ?? '', // Nome do adotante
      cpf: formValues.cpf ?? '', // CPF do adotante
      email: formValues.email?? '', // Email do adotante
      telefone: formValues.telefone ?? '', // Telefone do adotante
      estadoCivil: formValues.estadoCivil ?? '', // Estado civil do adotante
      logradouro: formValues.logradouro ?? '', // Logradouro do adotante
      cep: formValues.cep ?? '', // CEP do adotante
      numero: formValues.numero ?? '', // Número do adotante
      bairro: formValues.bairro ?? '', // Bairro do adotante
      cidade: formValues.cidade ?? '', // Cidade do adotante
      estado: formValues.estado ?? '', // Estado do adotante
      complemento: formValues.complemento ?? '' // Complemento do adotante
    };

    // Adicionando o novo adotante ao serviço
    this.adotanteService.addAdotante(newAdotante).subscribe(() => {
      // Exibindo a mensagem de sucesso
      this.snackBar.open('Adotante cadastrado com sucesso!', 'Fechar', {
        duration: 5000, // A mensagem será exibida por 5 segundos
        verticalPosition: 'top', // A mensagem será exibida no topo da tela
      });

      // Resetando o formulário
      this.profileForm.reset();
    });
  }
}


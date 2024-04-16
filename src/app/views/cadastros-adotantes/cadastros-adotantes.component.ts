import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Adotante } from 'src/app/models/adotante';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdotanteService } from 'src/app/services/adotante.service';

// Função validadora para o CPF
function cpfLengthValidator(control: AbstractControl): ValidationErrors | null {
  // Obtendo o valor do controle
  const value = control.value;
  // Verificando se o CPF tem exatamente 11 caracteres
  if (value && value.length !== 11) {
    // Se não tiver, retorna um erro
    return { cpfLength: true };
  }
  // Se tiver, retorna null (sem erros)
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
    // Campo nome com validação de requerido e mínimo de 8 caracteres
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    // Campo matrícula sem validação
    matricula: new FormControl(''),
    // Campo CPF com validação de requerido e validação de comprimento
    cpf: new FormControl('', [Validators.required, cpfLengthValidator]),
    // Campo email com validação de requerido e formato de email
    email: new FormControl('', [Validators.required, Validators.email]),
    
    telefone: new FormControl(''),
    
    estadoCivil: new FormControl(''),
    
    logradouro: new FormControl(''),
    
    cep: new FormControl(''),
    
    numero: new FormControl(''),
    
    bairro: new FormControl(''),
    
    cidade: new FormControl(''),
    
    estado: new FormControl(''),
  
    complemento: new FormControl('')
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
      matricula:'', // 
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
      complemento: formValues.complemento ?? '' 
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
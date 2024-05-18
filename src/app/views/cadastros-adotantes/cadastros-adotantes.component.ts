import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Adotante } from 'src/app/models/adotante';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdotanteService } from 'src/app/services/adotante.service';

// Função validadora para o CPF
function cpfLengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && value.length !== 11) {
    return { cpfLength: true };
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
    nome: new FormControl('', [Validators.required]),
    matricula: new FormControl(''),
    cpf: new FormControl('', [Validators.required, cpfLengthValidator]),
    email: new FormControl(''),
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
    this.adotanteService.getAdotantes().subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  // Método chamado quando o formulário é submetido
  onSubmit() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;

      const newAdotante: Adotante = {
        matricula: formValues.matricula || '',
        nome: formValues.nome || '',
        cpf: formValues.cpf || '',
        email: formValues.email || '',
        telefone: formValues.telefone || '',
        estadoCivil: formValues.estadoCivil || '',
        logradouro: formValues.logradouro || '',
        cep: formValues.cep || '',
        numero: formValues.numero || '',
        bairro: formValues.bairro || '',
        cidade: formValues.cidade || '',
        estado: formValues.estado || '',
        complemento: formValues.complemento || ''
      };

      this.adotanteService.addAdotante(newAdotante).subscribe(() => {
        this.snackBar.open('Adotante cadastrado com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
        });

        this.profileForm.reset();

        this.adotanteService.getAdotantes().subscribe(adotantes => {
          this.dataSource = adotantes;
        });
      });
    } else {
      this.snackBar.open('Por favor, preencha os campos corretamente.', 'Fechar', {
        duration: 5000,
        verticalPosition: 'top',
      });
    }
  }

  // Método chamado quando o botão de cancelar é clicado
  onCancel() {
    this.profileForm.reset();
    this.snackBar.open('Cadastro cancelado.', 'Fechar', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}

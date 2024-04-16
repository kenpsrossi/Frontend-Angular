import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pet } from 'src/app/models/pet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimalService } from 'src/app/services/animal.service';

// Decorador para definir um componente
@Component({
  selector: 'app-cadastros-animais',
  templateUrl: './cadastros-animais.component.html',
  styleUrls: ['./cadastros-animais.component.scss']
})
// Classe do componente
export class CadastrosAnimaisComponent implements OnInit {
  // Definição do formulário
  profileForm = new FormGroup({
    // Campos do formulário
    nome: new FormControl(''),
    matricula: new FormControl(''),
    especie: new FormControl(''),
    pelagem: new FormControl(''), 
    raca: new FormControl(''),
    sexo: new FormControl(''),
    castracao: new FormControl(''),
    vacinacao: new FormControl(''),
    localResgate: new FormControl(''),
    observacao: new FormControl(''),
    status: new FormControl(''),
    imagem: new FormControl(''), 
    idade: new FormControl('')
  });

  // Fonte de dados para a tabela
  dataSource: Pet[] = [];

  // Injetando MatSnackBar e AnimalService no construtor
  constructor(private snackBar: MatSnackBar, private animalService: AnimalService) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Inicializa a fonte de dados da tabela com os animais do serviço
    this.animalService.getAnimais().subscribe(animais => {
      this.dataSource = animais;
    });
  }

  // Método chamado quando o formulário é submetido
  onSubmit() {
    // Acessando o valor do formulário
    const formValues = this.profileForm.value;

    // Criando um novo animal com os valores do formulário
    const newAnimal: Pet = {
      matricula:'', 
      nome: formValues.nome ?? '', 
      especie: formValues.especie ?? '', 
      pelagem: formValues.pelagem ?? '', 
      raca: formValues.raca ?? '',
      sexo: formValues.sexo ?? '', 
      castracao: formValues.castracao ?? '', 
      vacinacao: formValues.vacinacao ?? '', 
      localResgate: formValues.localResgate ?? '', 
      observacao: formValues.observacao ?? '', 
      status: formValues.status ?? '', 
      imagem:'', 
      idade:0 
    };

    // Adicionando o novo animal ao serviço
    this.animalService.addAnimal(newAnimal).subscribe(() => {
      // Exibindo a mensagem de sucesso
      this.snackBar.open('Animal cadastrado com sucesso!', 'Fechar', {
        duration: 5000, // A mensagem será exibida por 5 segundos
        verticalPosition: 'top', // A mensagem será exibida no topo da tela
      });

      // Resetando o formulário
      this.profileForm.reset();
    });
  }
}
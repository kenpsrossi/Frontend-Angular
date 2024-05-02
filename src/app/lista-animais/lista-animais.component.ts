import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pet } from '../models/pet';
import { AnimalService } from '../services/animal.service';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { CadastrosAnimaisComponent } from '../views/cadastros-animais/cadastros-animais.component';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
  displayedColumns: string[] = ['matricula', 'nome', 'especie', 'pelagem', 'raca', 
    'sexo', 'castracao', 'vacinacao', 'localResgate', 'observacao', 'status', 'imagem', 'idade', 'acao'];
  dataSource: Pet[] = [];

   // Objeto para armazenar os dados do novo animal
   newAnimal: Pet = {
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
    idade: 0
  };
newanimal: any;

constructor(private animalService: AnimalService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe(animais => {
      this.dataSource = animais;
    });
  }

  openCadastroAnimaisDialog(animal: Pet): void {
    const dialogRef = this.dialog.open(CadastrosAnimaisComponent, {
      width: '900px',
      data: animal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.matricula) {
          this.editAnimal(result);
        } else {
          this.addAnimal(result);
        }
      }
    });
  }

  openAnimalFormDialog(animal: Pet): void {
    const dialogRef = this.dialog.open(AnimalFormComponent, {
      width: '900px',
      data: animal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.matricula) {
          this.editAnimal(result);
        } else {
          this.addAnimal(result);
        }
      }
    });
  }

  addAnimal(animal: Pet) {
    this.animalService.addAnimal(animal).subscribe(animais => {
      this.dataSource = animais;
    });
  }

  editAnimal(animal: Pet) {
    this.animalService.editAnimal(animal).subscribe(animais => {
      this.dataSource = animais;
    });
  }

  deleteAnimal(matricula: string) {
    this.animalService.deleteAnimal(matricula).subscribe(animais => {
      this.dataSource = animais;
    });
  }
}

/*

//Primeira versao testes abertura de de dialogo diferentes, um para cadastro outro para editar e ja vem com dados para editar

import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pet } from '../models/pet';
import { AnimalService } from '../services/animal.service';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { CadastrosAnimaisComponent } from '../views/cadastros-animais/cadastros-animais.component';


@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})

export class ListaAnimaisComponent  implements OnInit {
  // Colunas a serem exibidas na tabela
  displayedColumns: string[] = ['id', 'matricula', 'nome', 'especie', 'pelagem', 'raca', 
  'sexo', 'castracao', 'vacinacao', 'localResgate', 'observacao', 'status', 'imagem', 'idade', 'acao'];
  // Fonte de dados para a tabela
  dataSource: Pet[] = [];

  // Objeto para armazenar os dados do novo animal
  newAnimal: Pet = {
    id: 0,
    matricula: 0,
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
    idade: 0
  };
animal: any;

  // Injeção de dependências do serviço AdotanteService e do serviço de diálogo MatDialog
  constructor(private animalService: AnimalService, public dialog: MatDialog) { }
    
  // Função para abrir o diálogo de formulário de animal usando o formulário -> AnimalFormComponent
  /*openDialog(animal: Pet): void {
     const dialogRef = this.dialog.open(AnimalFormComponent, {
      width: '500px',
      data: animal
    });*/
/*
  // Função para abrir o diálogo de formulário de animal usando o formulário -> CadastrosAnimaisComponent
    openDialog(animal: Pet): void {
      const dialogRef = this.dialog.open(CadastrosAnimaisComponent, {
       width: '900px',
       data: animal
     });
     

    // Quando o diálogo é fechado, verifica se um resultado foi retornado e, em caso afirmativo, adiciona ou edita o animal conforme necessário
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.editAnimal(result);
        } else {
          this.addAnimais(result);
        }
        this.animalService.getAnimais().subscribe(animais => {
          this.dataSource = animais;
          console.log('Animais recebidos do serviço:', animais);

        });
      }
    });
  }
  

  // Na inicialização do componente, obtém todos os animais do serviço
  ngOnInit(): void {
      this.animalService.getAnimais().subscribe(animais => {
        this.dataSource = animais;
    });
  }
  // Adiciona um adotante usando o serviço
  addAnimais(animal: Pet) {
    this.animalService.addAnimal(animal).subscribe(animais => {
      this.dataSource = animais;
    });
  }

  // Edita um adotante usando o serviço
  editAnimal(animal: Pet) {
      this.animalService.editAnimal(animal).subscribe(animais => {
        this.dataSource = animais;
    });
  }

  // Deleta um adotante usando o serviço
    deleteAnimal(id: number) {
      this.animalService.deleteAnimal(id).subscribe(animais => {
        this.dataSource = animais;
    });
  }
}*/
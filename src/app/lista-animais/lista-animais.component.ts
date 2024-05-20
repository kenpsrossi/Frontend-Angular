import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    'sexo', 'castracao', 'observacao', 'status', 'idade', 'acao'];
  dataSource: Pet[] = [];
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

  constructor(
    private animalService: AnimalService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.atualizarLista();
  }

  openDialog(animal: Pet): void {
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

  openCadastroAnimaisDialog(animal: Pet): void {
    const dialogRef = this.dialog.open(CadastrosAnimaisComponent, {
      width: '900px',
      data: animal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.atualizarLista(); // Atualiza a lista após a ação              
      }
    });
  }

  addAnimal(animal: Pet) {
    this.animalService.addAnimal(animal).subscribe(() => {
      this.atualizarLista();
    });
  }

  editAnimal(animal: Pet) {
    this.animalService.editAnimal(animal).subscribe(() => {
      this.atualizarLista();
    });
  }

  deleteAnimal(matricula: string) {
    const confirmDelete = confirm('Deseja realmente excluir o animal?');
    if (confirmDelete) {
      this.animalService.deleteAnimal(matricula).subscribe(() => {
        this.atualizarLista();
        alert('Animal excluído com sucesso!');
      }, error => {
        console.error(error);
        alert('Erro ao excluir o animal! ' + error.message);
      });
    }
  }

  atualizarLista() {
    this.animalService.getAnimais().subscribe(animais => {
      this.dataSource = animais.map(animal => {
        if (animal.imagem) {
          animal.imagem = `data:image/jpeg;base64,${animal.imagem}`;
        }
        return animal;
      });
    });
  }
}

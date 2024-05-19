import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet }  from '../models/pet';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class  AnimalFormComponent  {
  constructor(
    public dialogRef: MatDialogRef<AnimalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pet,
    private animalService: AnimalService 
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.data.matricula) {
      // Editar animal existente
      this.animalService.editAnimal(this.data).subscribe(
        () => {
          console.log('Animal editado:', this.data);
          this.dialogRef.close(this.data);
        },
        error => {
          console.error('Erro ao editar animal:', error);
        }
      );
    }else {
      // Adicionar novo animal
      this.animalService.addAnimal(this.data).subscribe(
        novoAnimal => {
          console.log('Novo animal adicionado:', novoAnimal);
          this.dialogRef.close(novoAnimal);
        },
        error => {
          console.error('Erro ao adicionar animal:', error);
        }
      );
    }
    console.log('Dados retornados pelo diálogo:', this.data);
    this.dialogRef.close(this.data);
  }
}


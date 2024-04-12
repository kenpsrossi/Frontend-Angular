import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet }  from '../models/pet';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class  AnimalFormComponent  {
  // Injeção de dependências do diálogo e dos dados do animais
  constructor(
    public dialogRef: MatDialogRef<AnimalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pet ) {}

  // Função para fechar o diálogo sem retornar dados
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Função para fechar o diálogo e retornar os dados do formulário
  save(): void {
    console.log('Dados retornados pelo diálogo:', this.data);
    this.dialogRef.close(this.data);
  }
}


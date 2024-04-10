import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adotante }  from '../models/adotante';

@Component({
  selector: 'app-adotante-form',
  templateUrl: './adotante-form.component.html',
  styleUrls: ['./adotante-form.component.scss']
})
export class AdotanteFormComponent {
  // Injeção de dependências do diálogo e dos dados do adotante
  constructor(
    public dialogRef: MatDialogRef<AdotanteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Adotante) {}

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


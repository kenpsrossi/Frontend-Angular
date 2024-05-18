import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adotante } from '../models/adotante';
import { AdotanteService } from '../services/adotante.service';

@Component({
  selector: 'app-adotante-form',
  templateUrl: './adotante-form.component.html',
  styleUrls: ['./adotante-form.component.scss']
})
export class AdotanteFormComponent {
  constructor(
    public dialogRef: MatDialogRef<AdotanteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Adotante,
    private adotanteService: AdotanteService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.data.cpf) {
      // Editar adotante existente
      this.adotanteService.editAdotante(this.data).subscribe(
        () => {
          console.log('Adotante editado:', this.data);
          this.dialogRef.close(this.data);
        },
        error => {
          console.error('Erro ao editar adotante:', error);
        }
      );
    } else {
      // Adicionar novo adotante
      this.adotanteService.addAdotante(this.data).subscribe(
        novoAdotante => {
          console.log('Novo adotante adicionado:', novoAdotante);
          this.dialogRef.close(novoAdotante);
        },
        error => {
          console.error('Erro ao adicionar adotante:', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Adotante } from '../models/adotante';
import { AdotanteService } from '../services/adotante.service';
import { AdotanteFormComponent } from '../adotante-form/adotante-form.component';
import { CadastrosAdotantesComponent } from '../views/cadastros-adotantes/cadastros-adotantes.component';

@Component({
  selector: 'app-lista-adotantes',
  templateUrl: './lista-adotantes.component.html',
  styleUrls: ['./lista-adotantes.component.scss']
})
export class ListaAdotantesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'telefone', 'email', 'cpf', 'estadoCivil', 'logradouro', 'cep', 'numero', 'bairro', 'cidade', 'estado', 'acao'];
  dataSource: Adotante[] = [];
  newAdotante: Adotante = {
    matricula: '',
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    estadoCivil: '',
    logradouro: '',
    cep: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: ''
  };

  constructor(private adotanteService: AdotanteService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.atualizarLista();
  }

  openDialog(adotante: Adotante): void {
    const dialogRef = this.dialog.open(AdotanteFormComponent, {
      width: '900px',
      data: adotante
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.cpf) {
          this.editAdotante(result);
        } else {
          this.addAdotante(result);
        }
      }
    });
  }

  openCadastroAdotantesDialog(adotante: Adotante): void {
    const dialogRef = this.dialog.open(CadastrosAdotantesComponent, {
      width: '900px',
      data: adotante
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.cpf) {
          this.editAdotante(result);
        } else {
          this.addAdotante(result);
        }
        this.atualizarLista(); // Atualiza a lista após a ação
        
      }
    });
  }

  addAdotante(adotante: Adotante) {
    this.adotanteService.addAdotante(adotante).subscribe(() => {
      this.atualizarLista();
    });
  }

  editAdotante(adotante: Adotante) {
    this.adotanteService.editAdotante(adotante).subscribe(() => {
      this.atualizarLista();
    });
  }

  deleteAdotante(cpf: string) {
    const confirmDelete = confirm('Tem certeza que deseja deletar este adotante?');
    if (confirmDelete) {
      this.adotanteService.deleteAdotante(cpf).subscribe(() => {
        this.atualizarLista();
        alert('Adotante deletado com sucesso!');
      }, error => {
        console.error(error);
        alert('Falha ao deletar adotante: ' + error.message);
      });
    }
  }

  atualizarLista() {
    this.adotanteService.getAdotantes().subscribe((adotantes: Adotante[]) => {
      this.dataSource = adotantes;
    });
  }
}

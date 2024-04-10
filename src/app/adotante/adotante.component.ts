// adotante.component.ts


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adotante } from '../models/adotante';
import { AdotanteService } from '../services/adotante.service';
import { AdotanteFormComponent } from '../adotante-form/adotante-form.component';

@Component({
  selector: 'app-adotante',
  templateUrl: './adotante.component.html',
  styleUrls: ['./adotante.component.scss']
})
export class AdotanteComponent implements OnInit {
  // Colunas a serem exibidas na tabela
  displayedColumns: string[] = ['id', 'matricula', 'nome', 'telefone', 'email', 'cpf', 
  'estadoCivil', 'logradouro', 'cep', 'numero', 'bairro', 'cidade', 'estado', 'complemento', 'acao'];
  // Fonte de dados para a tabela
  dataSource: Adotante[] = [];

  // Objeto para armazenar os dados do novo adotante
  newAdotante: Adotante = {
    id: 0,
    matricula: 0,
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
adotante: any;

  // Injeção de dependências do serviço AdotanteService e do serviço de diálogo MatDialog
  constructor(private adotanteService: AdotanteService, public dialog: MatDialog) { }
    
  // Função para abrir o diálogo de formulário de adotante
  openDialog(adotante: Adotante): void {
    const dialogRef = this.dialog.open(AdotanteFormComponent, {
      width: '500px',
      data: adotante
    });

    // Quando o diálogo é fechado, verifica se um resultado foi retornado e, em caso afirmativo, adiciona ou edita o adotante conforme necessário
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.editAdotante(result);
        } else {
          this.addAdotante(result);
        }
        this.adotanteService.getAdotantes().subscribe(adotantes => {
          this.dataSource = adotantes;
          console.log('Adotantes recebidos do serviço:', adotantes);

        });
      }
    });
  }
  

  // Na inicialização do componente, obtém todos os adotantes do serviço
  ngOnInit(): void {
    this.adotanteService.getAdotantes().subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }
  // Adiciona um adotante usando o serviço
  addAdotante(adotante: Adotante) {
    this.adotanteService.addAdotante(adotante).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  // Edita um adotante usando o serviço
  editAdotante(adotante: Adotante) {
    this.adotanteService.editAdotante(adotante).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  // Deleta um adotante usando o serviço
  deleteAdotante(id: number) {
    this.adotanteService.deleteAdotante(id).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }
}

// Este código é responsável por exibir uma lista de adotantes em uma tabela,
// bem como por abrir um diálogo para adicionar ou editar adotantes.
// Ele usa o serviço AdotanteService para realizar essas operações.
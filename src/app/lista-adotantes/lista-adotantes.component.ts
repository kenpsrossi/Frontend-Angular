
// Este código é responsável por exibir uma lista de adotantes em uma tabela,
// bem como por abrir um diálogo para adicionar ou editar adotantes.
// Ele usa o serviço AdotanteService para realizar essas operações.
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adotante } from '../models/adotante';
import { AdotanteService } from '../services/adotante.service';
import { AdotanteFormComponent } from '../adotante-form/adotante-form.component';

@Component({
  selector: 'app-lista-adotantes',
  templateUrl: './lista-adotantes.component.html',
  styleUrls: ['./lista-adotantes.component.scss']
})

export class ListaAdotantesComponent implements OnInit {
  // Colunas a serem exibidas na tabela
  displayedColumns: string[] = ['matricula', 'nome', 'telefone', 'email', 'cpf', 'estadoCivil', 'logradouro', 'cep', 'numero', 'bairro', 'cidade', 'estado', 'complemento', 'acao'];
  
  // Array para armazenar os adotantes recebidos do servidor
  dataSource: Adotante[] = [];

  // Objeto para armazenar os dados do novo adotante
  newAdotante: Adotante = {
    matricula:'',
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

  constructor(private adotanteService: AdotanteService, public dialog: MatDialog) { }

  openDialog(adotante: Adotante): void {
    // Este método abre um diálogo para o formulário de adotantes
    const dialogRef = this.dialog.open(AdotanteFormComponent, {
      width: '900px',
      data: adotante
    });

    dialogRef.afterClosed().subscribe(result => {
      // Após o diálogo ser fechado, verificamos se um resultado foi retornado
      if (result) {
        // Se o adotante tiver um CPF, consideramos que é uma edição
        if (result.cpf) {
          this.editAdotante(result);
        } else {
          // Caso contrário, é um novo adotante
          this.addAdotante(result);
        }
        // Atualizamos a lista de adotantes após a edição ou adição
        this.adotanteService.getAdotantes().subscribe(adotantes => {
          this.dataSource = adotantes;
          console.log('Adotantes recebidos do serviço:', adotantes);
        });
      }
    });
  }

  ngOnInit(): void {
    // Quando o componente é inicializado, fazemos uma chamada ao serviço para obter a lista de adotantes
    this.adotanteService.getAdotantes().subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  addAdotante(adotante: Adotante) {
    // Este método adiciona um novo adotante à lista
    this.adotanteService.addAdotante(adotante).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  editAdotante(adotante: Adotante) {
    // Este método edita um adotante existente na lista
    this.adotanteService.editAdotante(adotante).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }

  deleteAdotante(cpf: string) {
    // Este método deleta um adotante da lista
    this.adotanteService.deleteAdotante(cpf).subscribe(adotantes => {
      this.dataSource = adotantes;
    });
  }
}
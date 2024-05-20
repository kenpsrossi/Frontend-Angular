import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdotanteService } from 'src/app/services/adotante.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Adotante } from 'src/app/models/adotante';
import { NotificationComponent } from 'src/app/notification/notification.component';

@Component({
  selector: 'app-cadastros-adotantes',
  templateUrl: './cadastros-adotantes.component.html',
  styleUrls: ['./cadastros-adotantes.component.scss']
})
export class CadastrosAdotantesComponent implements OnInit {
  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  profileForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    matricula: new FormControl(''),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    telefone: new FormControl(''),
    estadoCivil: new FormControl(''),
    logradouro: new FormControl(''),
    cep: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    complemento: new FormControl('')
  });

  constructor(
    private snackBar: MatSnackBar,
    private adotanteService: AdotanteService,
    private router: Router,
    @Optional() private dialogRef: MatDialogRef<CadastrosAdotantesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Adotante
  ) {
    if (data) {
      this.profileForm.patchValue(data);
    }
  }

  ngOnInit(): void {
    if (!this.data) {
      // Lógica para lidar com a inicialização do componente quando não usado como uma caixa de diálogo
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;

      const newAdotante: Adotante = {
        matricula: formValues.matricula || '',
        nome: formValues.nome || '',
        cpf: formValues.cpf || '',
        email: formValues.email || '',
        telefone: formValues.telefone || '',
        estadoCivil: formValues.estadoCivil || '',
        logradouro: formValues.logradouro || '',
        cep: formValues.cep || '',
        numero: formValues.numero || '',
        bairro: formValues.bairro || '',
        cidade: formValues.cidade || '',
        estado: formValues.estado || '',
        complemento: formValues.complemento || ''
      };

      this.adotanteService.addAdotante(newAdotante).subscribe(() => {
        this.notification.showMessage('Dados cadastrados com sucesso!<br> Agora escolha seu pet!');

        this.profileForm.reset();

        this.adotanteService.getAdotantes().subscribe(adotantes => {
          // Manipule os dados se necessário
        });

        // Redireciona para a página de adoção de animais após 6 segundos
        setTimeout(() => {
          this.router.navigate(['/adocao-animais']);
        }, 5000);

        if (this.dialogRef) {
          this.dialogRef.close(newAdotante);
        }
      });
    } else {
      this.snackBar.open('Por favor, preencha os campos corretamente.', 'Fechar', {
        duration: 5000,
        verticalPosition: 'top'
      });
    }
  }

  onCancel() {
    // Redireciona para a página de menu
    this.router.navigate(['/menu']);

    // Fecha a caixa de diálogo se estiver aberta
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}

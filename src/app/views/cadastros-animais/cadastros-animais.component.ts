import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/models/pet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimalService } from 'src/app/services/animal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastros-animais',
  templateUrl: './cadastros-animais.component.html',
  styleUrls: ['./cadastros-animais.component.scss']
})
export class CadastrosAnimaisComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
    matricula: new FormControl('', Validators.required),
    especie: new FormControl(''),
    pelagem: new FormControl(''),
    raca: new FormControl(''),
    sexo: new FormControl(''),
    castracao: new FormControl(''),
    vacinacao: new FormControl(''),
    localResgate: new FormControl(''),
    observacao: new FormControl(''),
    status: new FormControl(''),
    imagem: new FormControl(''),
    idade: new FormControl('')
  });

  dataSource: Pet[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private animalService: AnimalService,
    public dialogRef: MatDialogRef<CadastrosAnimaisComponent>
  ) {}

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe(animais => {
      this.dataSource = animais;
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;

      const newAnimal: Pet = {
        matricula: formValues.matricula || '',
        nome: formValues.nome || '',
        especie: formValues.especie || '',
        pelagem: formValues.pelagem || '',
        raca: formValues.raca || '',
        sexo: formValues.sexo || '',
        castracao: formValues.castracao || '',
        vacinacao: formValues.vacinacao || '',
        localResgate: formValues.localResgate || '',
        observacao: formValues.observacao || '',
        status: formValues.status || '',
        imagem: formValues.imagem || '',
        idade: 0
      };

      this.animalService.addAnimal(newAnimal).subscribe(() => {
        this.snackBar.open('Animal cadastrado com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
        });

        this.profileForm.reset();
        this.dialogRef.close(newAnimal); // Fechar o diálogo e enviar o novo animal
      });
    } else {
      this.snackBar.open('Por favor, preencha os campos corretamente.', 'Fechar', {
        duration: 5000,
        verticalPosition: 'top',
      });
    }
  }

  onCancel() {
    this.profileForm.reset();
    this.dialogRef.close(); // Fechar o diálogo sem enviar dados
    this.snackBar.open('Cadastro cancelado!', 'Fechar', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}

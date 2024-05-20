import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import petsData from 'src/app/data/pets-data';
import { Pet } from 'src/app/models/pet';
import { NotificacaoCompletoComponent } from 'src/app/notificacao-completo/notificacao-completo.component';

@Component({
  selector: 'app-adocao-animais',
  templateUrl: './adocao-animais.component.html',
  styleUrls: ['./adocao-animais.component.scss']
})
export class AdocaoAnimaisComponent {
  @ViewChild(NotificacaoCompletoComponent) notificacao!: NotificacaoCompletoComponent;
  public animais: Array<Pet> = petsData;

  constructor(private readonly _router: Router, private readonly _route: ActivatedRoute) {
    _router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        const pathVariable = _router.url.replace('/', '');
        let especie: 'Cachorro' | 'Gato' | undefined;

        switch (pathVariable) {
          case 'dogs':
            especie = 'Cachorro';
            break;
          case 'cats':
            especie = 'Gato';
            break;
        }

        this.animais = this.filterAnimalsPerEspecie(especie);
      }
    });
  }

  onSelectPet() {
    // Mostrar a mensagem de notificação
    const message = `Escolha do pet concluída com sucesso!<br>
                     Seus dados e a escolha do pet foram salvos.<br>
                     Em breve, mais informações sobre as próximas etapas da adoção.<br>
                     Muito obrigado!`;
    
    this.notificacao.show(message);

    // Redirecionar para a página de menu após 8 segundos
    setTimeout(() => {
      this._router.navigate(['/menu']);
    }, 7000);
  }

  private filterAnimalsPerEspecie(especie?: 'Cachorro' | 'Gato'): Array<Pet> {
    if (!especie) return petsData;
    return petsData.filter(animal => animal.especie === especie);
  }
}

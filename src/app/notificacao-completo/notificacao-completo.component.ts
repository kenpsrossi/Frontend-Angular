import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificacao-completo',
  templateUrl: './notificacao-completo.component.html',
  styleUrls: ['./notificacao-completo.component.scss']
})

export class NotificacaoCompletoComponent {
  @Input() mensagem: string = '';
  showMessage: boolean = false;

  show(mensagem: string) {
    this.mensagem = mensagem;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 7000);
  }
}


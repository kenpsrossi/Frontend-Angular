
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajudar',
  templateUrl: './ajudar.component.html',
  styleUrls: ['./ajudar.component.scss']
})
export class AjudarComponent {
  expandCard(cardId: string) {
    document.getElementById(cardId)?.classList.add('expanded');
  }

  shrinkCard(cardId: string) {
    document.getElementById(cardId)?.classList.remove('expanded');
  }
}




 



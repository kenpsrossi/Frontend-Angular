import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public message: string = '';

  constructor() {}

  ngOnInit(): void {}

  showMessage(message: string) {
    this.message = message;
    document.getElementById('notification')!.style.display = 'block';
    setTimeout(() => {
      document.getElementById('notification')!.style.display = 'none';
    }, 5000);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notifica } from 'src/app/models/Notifica';
import { NotificheService } from 'src/app/services/notifiche.service';

@Component({
  selector: 'app-notifiche-drop-down',
  templateUrl: './notifiche-drop-down.component.html',
  styleUrls: ['./notifiche-drop-down.component.scss'],
})
export class NotificheDropDownComponent implements OnInit {
  @Input() notifiche!: Notifica[];
  @Output() numeroNotifiche: EventEmitter<string> = new EventEmitter<string>();
  unRead!: string;
  venduto!: boolean;

  constructor(private notificheService: NotificheService) {}
  ngOnInit(): void {
    this.notifiche = [];
    this.notificheService.getMineNew().subscribe((res) => {
      this.notifiche = res;
      this.updateNumeroNotificheNonLette();
    });
    // this.dataDummy();
  }

  // TODO Cancellare!
  dataDummy() {
    this.notifiche.push(
      new Notifica({
        textMessage: 'Notifica di prova1',
        read: true,
      })
    );

    this.notifiche.push(
      new Notifica({
        textMessage: 'Notifica di prova2',
        read: true,
      })
    );

    this.notifiche.push(
      new Notifica({
        textMessage: 'Notifica di prova3',
        read: false,
      })
    );
    this.updateNumeroNotificheNonLette();
  }

  updateNumeroNotificheNonLette() {
    this.unRead = '' + this.notifiche.filter((n) => !n.read).length;
    if (this.notifiche.length > 10) {
      this.unRead = '10+';
    }
    this.numeroNotifiche.emit(this.unRead);
  }

  handleRead(status, notifica) {
    notifica.read = status;
    this.updateNumeroNotificheNonLette();
  }
}

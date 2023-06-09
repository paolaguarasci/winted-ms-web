import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notifica } from 'src/app/models/Notifica';
import { NotificheService } from 'src/app/services/notifiche.service';

@Component({
  selector: 'app-notifiche-drop-down',
  templateUrl: './notifiche-drop-down.component.html',
  styleUrls: ['./notifiche-drop-down.component.scss'],
})
export class NotificheDropDownComponent implements OnInit,OnChanges {
  notifiche!: Notifica[];
  @Output() numeroNotifiche: EventEmitter<string> = new EventEmitter<string>();
  unRead!: string;
  venduto!: boolean;
  @Input() full: boolean = false; 

  constructor(private notificheService: NotificheService, private router: Router) {}

  ngOnInit(): void {
    this.notifiche = [];
    this.notificheService.getMine().subscribe((res) => {
      this.notifiche = res;
      if (!this.full) {
        this.notifiche = res.slice(0,3);
      }
      this.updateNumeroNotificheNonLette();
    });
  }
  ngOnChanges() {
    console.log("ciao")
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

  handleClickVediTutto() {
    this.router.navigate(['notifiche']);
  }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notifica } from 'src/app/models/Notifica';
import { User } from 'src/app/models/User';
import { NotificheService } from 'src/app/services/notifiche.service';
import { ProfileService } from 'src/app/services/profile.service';
import { RxStompService } from 'src/app/services/rxstomp.service';

@Component({
  selector: 'app-notifiche-drop-down',
  templateUrl: './notifiche-drop-down.component.html',
  styleUrls: ['./notifiche-drop-down.component.scss'],
})
export class NotificheDropDownComponent implements OnInit,OnChanges {
  notifiche!: Notifica[];
  notificheFull!: Notifica[];
  @Output() numeroNotifiche: EventEmitter<string> = new EventEmitter<string>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  unRead!: string;
  venduto!: boolean;
  @Input() full: boolean = false;
  topicSubscription: any;
  loggedUser!: User | null;
  constructor(private notificheService: NotificheService, private router: Router, private rxStompService: RxStompService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.notifiche = [];
    this.notificheFull = [];
    this.profileService.getLogged().subscribe((res) => {
      this.conSocket(res.id)
    })
    this.notificheService.getMine().subscribe((res) => {
      this.notificheFull = res;
      this.notifiche = res;
      this.notifiche.reverse();
      if (!this.full) {
        this.notifiche = res.slice(0,5);
      }
      this.updateNumeroNotificheNonLette();
    });
  }
  unsubsocket(){
    if (this.topicSubscription) {
      this.topicSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubsocket();
  }
  conSocket(id) {
    if(this.topicSubscription != undefined) {
      this.unsubsocket();
    }
    this.topicSubscription = this.rxStompService.watch('/notify/'+id).subscribe((message: any) => {
      let msgFromServer = JSON.parse(message.body)
      console.log("SOCKET MSG", msgFromServer.message)
      this.update();
    })
}

  update(){
    this.notificheService.getMine().subscribe((res) => {
      this.notificheFull = res;
      this.notifiche = res;
      this.notifiche.reverse();
      if (!this.full) {
        this.notifiche = res.slice(0,5);
      }
      this.updateNumeroNotificheNonLette();
    });
  }

  ngOnChanges() {
    console.log("ciao")
  }
  updateNumeroNotificheNonLette() {
    this.unRead = '' + this.notificheFull.filter((n) => !n.read).length;
    if (this.notificheFull.length > 5) {
      this.unRead = '5+';
    }
    this.numeroNotifiche.emit(this.unRead);
  }

  handleRead(status, notifica) {
    notifica.read = status;
    this.update();
  }

  handleClickVediTutto() {
    this.close.emit(true);
    this.router.navigate(['notifiche']);
  }
}

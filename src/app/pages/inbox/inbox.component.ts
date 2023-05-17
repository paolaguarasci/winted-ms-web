import { Component, OnInit } from '@angular/core';
import {
  MessaggioConversazione,
  MessaggioConversazioneTipi,
} from './../../models/MessaggioConversazione';

import { ActivatedRoute } from '@angular/router';
import { ConversationService } from './../../services/conversation.service';
import { Conversazione } from 'src/app/models/Conversazione';
import { Inbox } from './../../models/Inbox';
import { InboxService } from 'src/app/services/inbox.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  inbox!: Inbox;
  conversazione!: Conversazione;
  loggedUser!: User;
  otherUser!: User;
  newMessage!: string;
  id!: any;

  constructor(
    private inboxService: InboxService,
    private conversationService: ConversationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.update();
    });

    this.loggedUser = new User({
      name: 'paola',
      image:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
      rating: 5,
    });
    this.otherUser = new User({
      name: 'margheritapietro',
      image: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
      rating: 5,
    });

    this.update();
  }

  update() {
    this.getPreview();
    if (!this.id) {
      this.id = this.inbox.anteprime[0].conversationId;
    }
    this.getConversation(this.id);
  }

  getPreview() {
    // this.conversationService.getById(id).subscribe((res) => {
    //    this.conversazione = res;
    // })

    this.inbox = new Inbox();
    this.inbox.anteprime = [];
    for (let i = 0; i < 10; i++) {
      this.inbox.anteprime.push({
        conversationId: '' + i,
        altroUtente: this.otherUser,
        timeAgo: '1 settimana fa',
        lastMessage: 'Ciao Zu',
        prodottoCorrelato: '',
      });
    }
  }
  getConversation(id) {
    // this.conversationService.getById(id).subscribe((res) => {
    //   this.conversazione = res;
    // })
    this.conversazione = new Conversazione({
      altroUtente: this.otherUser,
      prodottoCorrelato: '',
      messaggi: [],
    });

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        content: 'ciao',
        from: this.loggedUser,
        to: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        content: 'come va?',
        from: this.loggedUser,
        to: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        content: 'ciao! tutto bene',
        from: this.otherUser,
        to: this.loggedUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '',
        visto: false,
      })
    );
  }

  sendTextMessage(event) {
    if (this.newMessage.length == 0) {
      return;
    }
    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        content: this.newMessage,
        from: this.loggedUser,
        to: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );
    this.newMessage = '';
    this.conversationService.update(this.conversazione).subscribe((result) => {
      this.newMessage = '';
      this.conversazione = result;
    });
  }

  sendPhotoMessage(event) {
    alert('To be implemented!');
  }
}

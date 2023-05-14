import { Component, OnInit } from '@angular/core';
import {
  MessaggioConversazione,
  MessaggioConversazioneTipi,
} from './../../models/MessaggioConversazione';

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

  constructor(
    private inboxService: InboxService,
    private conversationService: ConversationService
  ) {}

  ngOnInit(): void {
    this.inbox = new Inbox();
    this.inbox.anteprime = [];
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
    for (let i = 0; i < 10; i++) {
      this.inbox.anteprime.push({
        altroUtente: this.otherUser,
        timeAgo: '1 settimana fa',
        lastMessage: 'Ciao Zu',
        prodottoCorrelato: '',
      });
    }

    this.conversazione = new Conversazione({
      altroUtente: this.otherUser,
      prodottoCorrelato: '',
      messaggi: [],
    });

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'ciao',
        mittente: this.loggedUser,
        destinatario: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'come va?',
        mittente: this.loggedUser,
        destinatario: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'ciao! tutto bene',
        mittente: this.otherUser,
        destinatario: this.loggedUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '',
        visto: false,
      })
    );
  }

  sendTextMessage(event) {
    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: this.newMessage,
        mittente: this.loggedUser,
        destinatario: this.otherUser,
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversationService.update(this.conversazione).subscribe((result) => {
      this.newMessage = '';
      this.conversazione = result;
    });
  }

  sendPhotoMessage(event) {
    alert('To be implemented!');
  }
}

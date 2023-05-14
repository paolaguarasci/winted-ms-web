import { Component, OnInit } from '@angular/core';
import {
  MessaggioConversazione,
  MessaggioConversazioneTipi,
} from './../../models/MessaggioConversazione';

import { AnteprimaInbox } from './../../models/AnteprimaInbox';
import { ConversationService } from './../../services/conversation.service';
import { Conversazione } from 'src/app/models/Conversazione';
import { Inbox } from './../../models/Inbox';
import { InboxService } from 'src/app/services/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  inbox!: Inbox;
  conversazione!: Conversazione;
  loggedUserName!: string;
  newMessage!: string;
  constructor(
    private inboxService: InboxService,
    private conversationService: ConversationService
  ) {}

  ngOnInit(): void {
    this.inbox = new Inbox();
    this.inbox.anteprime = [];
    this.loggedUserName = 'paola';
    for (let i = 0; i < 10; i++) {
      this.inbox.anteprime.push({
        imgUrl: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
        altroUtente: 'margheritapietro',
        timeAgo: '1 settimana fa',
        lastMessage: 'Ciao Zu',
        prodottoCorrelato: '',
      });
    }

    this.conversazione = new Conversazione({
      altroUtente: 'margheritapietro',
      ratingAltroUtente: 5,
      prodottoCorrelato: '',
      messaggi: [],
    });

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'ciao',
        mittente: 'paola',
        destinatario: 'margheritapietro',
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'come va?',
        mittente: 'paola',
        destinatario: 'margheritapietro',
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '1 minuto fa',
        visto: false,
      })
    );

    this.conversazione.messaggi.push(
      new MessaggioConversazione({
        corpo: 'ciao! tutto bene',
        mittente: 'margheritapietro',
        destinatario: 'paola',
        tipo: MessaggioConversazioneTipi.testo,
        timestamp: '',
        timeAgo: '',
        visto: false,
      })
    );
  }
}

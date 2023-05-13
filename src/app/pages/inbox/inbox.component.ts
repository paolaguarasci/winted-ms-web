import { Component, OnInit } from '@angular/core';

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

  constructor(
    private inboxService: InboxService,
    private conversationService: ConversationService
  ) {}

  ngOnInit(): void {
    this.inbox = new Inbox();
    this.inbox.anteprime = [];

    for (let i = 0; i < 10; i++) {
      this.inbox.anteprime.push({
        imgUrl: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
        altroUtente: 'margheritapietro',
        timeAgo: '1 settimana fa',
        lastMessage: 'Ciao Zu',
        prodottoCorrelato: '',
      });
    }
  }
}

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

    this.route.queryParamMap.subscribe((params) => {
      let offer_to = params.get('offer_to');
      let offer_price = params.get('offer_price');
      let info_about = params.get('info_about');
      if (offer_to && offer_price) {
        this.makeOffert(offer_to, offer_price)
      }

      if (info_about) {
        this.askInfo(info_about);
      }
    }
  );
    this.loggedUser = new User({
      username: 'paola',
      avatar:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
      reputation: 5,
    });
    this.otherUser = new User({
      username: 'margheritapietro',
      avatar: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
      reputation: 5,
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

  makeOffert(productId, price) {
    this.inboxService.makeAnOffert(productId, price).subscribe((res) => {
      console.log("Offerta effettuata")
    })
  }


  askInfo(productId) {
    this.inboxService.askInfo(productId).subscribe((res) => {
      console.log("Richiesta effettuata")
    })
  }
}

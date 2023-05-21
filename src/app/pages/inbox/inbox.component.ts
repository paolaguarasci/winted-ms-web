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
import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';
import { ProfileService } from 'src/app/services/profile.service';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  conversazione!: Conversazione;
  inboxPreview!: AnteprimaInbox[];
  loggedUser!: User;
  otherUser!: User;
  newMessage!: string;
  id!: any;
  prodottoCorrelato!: Product;

  constructor(
    private conversationService: ConversationService,
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.getLoggedUser();

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.update();
      this.getPreview();
    });

    this.route.queryParamMap.subscribe((params) => {
      let offer_to = params.get('offer_to');
      let offer_price = params.get('offer_price');
      let info_about = params.get('info_about');
      if (offer_to && offer_price) {
        this.makeOffert(offer_to, offer_price);
      }

      if (info_about) {
        this.askInfo(info_about);
      }
    });
  }

  update() {
    if (!this.id && this.inboxPreview && this.inboxPreview.length > 0) {
      this.id = this.inboxPreview[0].conversationId;
    }
    if (this.id) {
      this.getConversation(this.id);
      
    }
  }

  getPreview() {
    this.inboxPreview = [];
    this.conversationService.getPreview().subscribe((res) => {
      this.inboxPreview = res;
      if (!this.id && this.inboxPreview.length > 0) {
        this.id = this.inboxPreview[0].conversationId;
      }
      if (this.id) {
        this.getConversation(this.id);
      }
    });
  }



  getConversation(id) {
    this.conversationService.getById(id).subscribe((res) => {
      this.conversazione = res;
      this.getOther();
    });
  }

  sendTextMessage(event) {
    if (this.newMessage.length == 0) {
      return;
    }
    this.conversazione.messages.push(
      new MessaggioConversazione({
        content: this.newMessage,
        from: this.loggedUser.username,
        to: this.otherUser.username,
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

  getLoggedUser() {
    this.profileService.getOneByUsername("paola").subscribe((res) => {
      this.loggedUser = res;
    })
  }

  getOther() {
    this.profileService.getOneByUsername(this.conversazione.altroUtente).subscribe((res) => {
      this.otherUser = res;
    })
  }

  sendPhotoMessage(event) {
    alert('To be implemented!');
  }

  makeOffert(productId, price) {
    // this.inboxService.makeAnOffert(productId, price).subscribe((res) => {
    //   console.log('Offerta effettuata');
    // });
  }

  askInfo(productId) {
    // this.inboxService.askInfo(productId).subscribe((res) => {
    //   console.log('Richiesta effettuata');
    // });
  }
}

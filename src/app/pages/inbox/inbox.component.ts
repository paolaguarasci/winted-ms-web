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
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  conversazione!: Conversazione | null;
  inboxPreview!: AnteprimaInbox[];
  loggedUser!: User;
  otherUser!: User;
  newMessage!: string;
  id!: any;
  prodottoCorrelato!: Product | null;

  constructor(
    private conversationService: ConversationService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private productService: ProductService

  ) {}

  ngOnInit(): void {
    this.prodottoCorrelato = null;
    this.conversazione = null;
    this.getLoggedUser();
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.update();
      this.getPreview();
    });
    this.route.queryParamMap.subscribe((params) => {
      // let offer_to = params.get('offer_to');
      // let offer_price = params.get('offer_price');
      // let info_about = params.get('info_about');
      // if (offer_to && offer_price) {
      //   this.makeOffert(offer_to, offer_price);
      // }

      // if (info_about) {
      //   this.askInfo(info_about);
      // }
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
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.prodottoCorrelato = null;
    if(this.conversazione?.prodottoCorrelato) {
      this.productService.getById(this.conversazione?.prodottoCorrelato).subscribe((res) => {
        this.prodottoCorrelato = res;
        if (!this.prodottoCorrelato.featured && !this.prodottoCorrelato.resources) {
          this.prodottoCorrelato.featured = 'https://fakeimg.pl/200x300';
        } else if (!this.prodottoCorrelato.featured && this.prodottoCorrelato.resources.length > 0) {
          this.prodottoCorrelato.featured =
            '/api/v1/resource/image/' +
            this.prodottoCorrelato.resources[0];
        }
      })
    }
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
    let newMsg = new MessaggioConversazione({
      content: this.newMessage,
      from: this.loggedUser.id,
      to: this.otherUser.id,
      tipo: MessaggioConversazioneTipi.testo,
      timestamp: '',
    })
    
    this.newMessage = '';
    if (this.conversazione?.id) {
      this.conversationService.addMessage(this.conversazione?.id, newMsg).subscribe((result) => {
        this.newMessage = '';
        this.conversazione = result;
      });
    }
  }

  getLoggedUser() {
    this.profileService.getLogged().subscribe((res) => {
      this.loggedUser = res;
    })
  }

  getOther() {
    if (this.conversazione) {
      this.profileService.getById(this.conversazione?.altroUtente).subscribe((res) => {
        this.otherUser = res;
      })
    }
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

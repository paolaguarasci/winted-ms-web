import { Component, OnInit } from '@angular/core';
import {
  MessaggioConversazione,
  MessaggioConversazioneTipi,
} from './../../models/MessaggioConversazione';

import { ActivatedRoute, Router } from '@angular/router';
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
import { AuthService } from 'src/app/services/auth.service';

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
  isNew!: boolean;
  value: number = 0;
  offertPrice!: string;
  isOffert!: boolean;
  constructor(
    private conversationService: ConversationService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.isNew = false;
    this.prodottoCorrelato = null;
    this.conversazione = null;
    this.isOffert = false;
    this.getLoggedUser();

    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.isNew = false;
        this.prodottoCorrelato = null;
        this.conversazione = null;
        this.id = params.get('id');
        this.update();
        this.getPreview();
      } else {
        this.getPreview();
      }
    });

    this.route.queryParamMap.subscribe(async (params) => {
      this.isNew = false;
      this.prodottoCorrelato = null;
      this.conversazione = null;
      this.isOffert = false;
      let offer_to = params.get('offer_to');
      let offer_price = params.get('offer_price');
      let info_about = params.get('info_about');

      if (offer_to && offer_price) {
        this.profileService.getLogged().subscribe((res) => {
          this.loggedUser = res;
          this.productService.getById(offer_to ?? '').subscribe((res2) => {
            this.conversazione = new Conversazione({
              messages: [],
              user1: this.loggedUser?.id,
              user2: res2.owner ?? '',
              altroUtente: res2.owner ?? '',
              prodottoCorrelato: offer_to ?? ''
            });
            console.log("nuova conv offerta ", this.conversazione)
            this.value += 1;
            // this.getOther();
            this.getPreview();
            this.inboxPreview.push({
              altroUtente: this.conversazione.altroUtente,
              timeAgo: 'now',
              lastMessage: '',
              prodottoCorrelato: this.conversazione.prodottoCorrelato,
              conversationId: '',
            });
            console.log('Nuova conversazione con ', res2.owner);
            this.makeOffert(offer_to, offer_price);
          });
        });

      }

      if (info_about) {
        this.askInfo(info_about);
      }

      if (params.get('new')) {
        this.isNew = true;
        let newConversationWith = params.get('new');

        this.profileService.getLogged().subscribe((res) => {
          this.loggedUser = res;
          this.conversazione = new Conversazione({
            messages: [],
            user1: this.loggedUser?.id,
            user2: newConversationWith ?? '',
            altroUtente: newConversationWith ?? '',
          });
          this.value += 1;
          this.getOther();
          this.getPreview();
          this.inboxPreview.push({
            altroUtente: this.conversazione.altroUtente,
            timeAgo: 'now',
            lastMessage: '',
            prodottoCorrelato: this.conversazione.prodottoCorrelato,
            conversationId: '',
          });

          console.log('Nuova conversazione con ', newConversationWith);
        });
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

      if (this.isNew) {
        this.inboxPreview = [
          {
            altroUtente: this.conversazione?.altroUtente ?? '',
            timeAgo: 'now',
            lastMessage: '',
            prodottoCorrelato: this.conversazione?.prodottoCorrelato ?? '',
            conversationId: '',
          },
          ...res,
        ];
      }

      if (!this.id && this.inboxPreview.length > 0 && !this.isNew) {
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
    if (this.conversazione?.prodottoCorrelato) {
      this.productService
        .getById(this.conversazione?.prodottoCorrelato)
        .subscribe((res) => {
          this.prodottoCorrelato = res;
          if (
            !this.prodottoCorrelato.featured &&
            !this.prodottoCorrelato.resources
          ) {
            this.prodottoCorrelato.featured = 'https://fakeimg.pl/200x300';
          } else if (
            !this.prodottoCorrelato.featured &&
            this.prodottoCorrelato.resources.length > 0
          ) {
            this.prodottoCorrelato.featured =
              '/api/v1/resource/image/' + this.prodottoCorrelato.resources[0];
          }
        });
    }
  }

  getConversation(id) {
    this.conversationService.getById(id).subscribe((res) => {
      this.conversazione = res;
      this.getOther();
    });
  }

  sendMessage(event, type = MessaggioConversazioneTipi.testo) {
    if (
      type === MessaggioConversazioneTipi.testo &&
      this.newMessage.length == 0
    ) {
      return;
    }

    if (this.isNew && this.conversazione) {
      this.conversationService.create(this.conversazione).subscribe((res) => {
        this.conversazione = res;
        console.log(this.conversazione);
        if (type === MessaggioConversazioneTipi.testo) {
          this.saveTextMessage(event);
        } else if (type === MessaggioConversazioneTipi.offert) {
          this.saveOffertMessage(event);
        }
        this.getPreview();
      });
    } else if (this.isOffert && this.conversazione) {

      this.conversationService.create(this.conversazione).subscribe((res) => {
        this.conversazione = res;
        console.log(this.conversazione);
        this.saveOffertMessage(event);
        this.getPreview();
      });

    } else {
      this.saveTextMessage(event);
    }
  }

  saveTextMessage(event) {

    let newMsg = new MessaggioConversazione({
      content: this.newMessage,
      from: this.loggedUser.id,
      to: this.otherUser.id,
      tipo: MessaggioConversazioneTipi.testo,
      timestamp: '',
    });

    this.newMessage = '';
    if (this.conversazione?.id) {
      this.conversationService
        .addMessage(this.conversazione?.id, newMsg)
        .subscribe((result) => {
          this.newMessage = '';
          this.conversazione = result;
        });
    }
  }

  saveOffertMessage(event) {
    console.log("invio offerta")
    let newMsg = new MessaggioConversazione({
      content: "Vuoi accettare l'offera a " + this.offertPrice + "E ?",
      from: this.loggedUser.id,
      to: this.otherUser.id,
      tipo: MessaggioConversazioneTipi.offert,
      timestamp: '',
    });

    this.newMessage = '';
    if (this.conversazione?.id) {
      this.conversationService
        .addMessage(this.conversazione?.id, newMsg)
        .subscribe((result) => {
          this.newMessage = '';
          this.conversazione = result;
        });
    }
  }

  async getLoggedUser() {
    this.profileService.getLogged().subscribe((res) => {
      this.loggedUser = res;
    });
  }

  getOther() {
    if (this.conversazione) {
      this.profileService
        .getById(this.conversazione?.altroUtente)
        .subscribe((res) => {
          this.otherUser = res;
        });
    }
  }

  sendPhotoMessage(event) {
    alert('To be implemented!');
  }

  makeOffert(productId, price) {
    console.log('Offerta per il prodotto ', productId, ' al prezzo ', price);
    this.offertPrice = price;
    this.isOffert = true;
    this.sendMessage(null, MessaggioConversazioneTipi.offert);
  }

  askInfo(productId) {
    // this.inboxService.askInfo(productId).subscribe((res) => {
    //   console.log('Richiesta effettuata');
    // });
  }
}

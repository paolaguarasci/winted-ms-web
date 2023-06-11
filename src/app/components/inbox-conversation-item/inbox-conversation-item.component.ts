import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  MessaggioConversazione,
  MessaggioConversazioneTipi,
} from 'src/app/models/MessaggioConversazione';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-inbox-conversation-item',
  templateUrl: './inbox-conversation-item.component.html',
  styleUrls: ['./inbox-conversation-item.component.scss'],
})
export class InboxConversationItemComponent implements OnInit {
  @Input() msg!: MessaggioConversazione;
  @Input() loggedUser!: User;
  @Input() otherUser!: User;
  @Output() offertAccepted: EventEmitter<any> = new EventEmitter<any>();
  authorMsg!: User | null;
  inviato!: boolean;
  isFromWinted!: boolean;
  isOffert!: boolean;

  ngOnInit(): void {
    this.inviato = false;
    this.isOffert = false;
    this.isFromWinted = false;
    this.authorMsg = null;

    if (
      !this.msg.messageType ||
      this.msg.messageType == null ||
      this.msg.messageType == undefined
    ) {
      this.msg.messageType = MessaggioConversazioneTipi.testo;
    }
    if (this.msg.messageType === MessaggioConversazioneTipi.system || this.msg.messageType === MessaggioConversazioneTipi.system_request) {
      this.isFromWinted = true;
    }
    if (this.msg.from !== this.loggedUser.id) {
      this.inviato = false;
      this.authorMsg = this.otherUser;
    } else {
      this.inviato = true;
      this.authorMsg = this.loggedUser;
    }
    if (this.msg.messageType === MessaggioConversazioneTipi.offert_request) {
      this.isOffert = true;
    }
  }

  rejectOffert() {
    this.offertAccepted.emit({ answer: false, requestId: this.msg.id });
  }
  acceptOffert() {
    this.offertAccepted.emit({ answer: true, requestId: this.msg.id });
  }
}

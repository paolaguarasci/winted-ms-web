import { Component, Input, OnInit } from '@angular/core';

import { MessaggioConversazione } from 'src/app/models/MessaggioConversazione';
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
  authorMsg!: User;
  inviato!: boolean;

  ngOnInit(): void {
    this.inviato = false;
    if (this.msg.from === this.loggedUser.username) {
      this.inviato = true;
      this.authorMsg = this.loggedUser;
    } else {
      this.inviato = false;
      this.authorMsg = this.otherUser;
    }
  }
}

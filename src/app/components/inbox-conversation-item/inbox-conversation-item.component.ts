import { Component, Input, OnInit } from '@angular/core';

import { MessaggioConversazione } from 'src/app/models/MessaggioConversazione';

@Component({
  selector: 'app-inbox-conversation-item',
  templateUrl: './inbox-conversation-item.component.html',
  styleUrls: ['./inbox-conversation-item.component.scss'],
})
export class InboxConversationItemComponent implements OnInit {
  @Input() msg!: MessaggioConversazione;
  loggedUsername!: string;
  inviato!: boolean;

  ngOnInit(): void {
    this.loggedUsername = "paola"
    this.inviato = false;
    if (this.msg.mittente === this.loggedUsername) {
      this.inviato = true;
    }
  }
}

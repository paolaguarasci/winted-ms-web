import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';

@Component({
  selector: 'app-inbox-preview-item',
  templateUrl: './inbox-preview-item.component.html',
  styleUrls: ['./inbox-preview-item.component.scss'],
})
export class InboxPreviewItemComponent implements OnInit {
  @Input() anteprima!: AnteprimaInbox;
  @Input() routerId!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}
  handleClick() {
    this.router.navigate(['inbox', this.anteprima.conversationId]);
  }
}

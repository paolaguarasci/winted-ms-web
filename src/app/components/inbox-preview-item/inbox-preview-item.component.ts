import { Component, Input, OnInit } from '@angular/core';

import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';

@Component({
  selector: 'app-inbox-preview-item',
  templateUrl: './inbox-preview-item.component.html',
  styleUrls: ['./inbox-preview-item.component.scss']
})
export class InboxPreviewItemComponent implements OnInit {

  @Input() anteprima!: AnteprimaInbox;

  ngOnInit(): void {}
}

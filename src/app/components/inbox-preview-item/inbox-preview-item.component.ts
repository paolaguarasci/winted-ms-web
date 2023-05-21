import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-inbox-preview-item',
  templateUrl: './inbox-preview-item.component.html',
  styleUrls: ['./inbox-preview-item.component.scss'],
})
export class InboxPreviewItemComponent implements OnInit {
  @Input() anteprima!: AnteprimaInbox;
  @Input() routerId!: string;
  otherUser!: User;

  constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {}
  ngOnInit(): void {
    this.profileService.getOneByUsername(this.anteprima.altroUtente).subscribe((res) => {
      this.otherUser = res;
    })
  }
  handleClick() {
    this.router.navigate(['inbox', this.anteprima.conversationId]);
  }
}

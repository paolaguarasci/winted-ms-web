import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-inbox-preview-item',
  templateUrl: './inbox-preview-item.component.html',
  styleUrls: ['./inbox-preview-item.component.scss'],
})
export class InboxPreviewItemComponent implements OnInit {
  @Input() anteprima!: AnteprimaInbox;
  @Input() routerId!: string;
  otherUser!: User;
  @Input() prodottoCorrelato!: Product | null;

  constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {}
  ngOnInit(): void {
    this.profileService.getById(this.anteprima.altroUtente).subscribe((res) => {
      this.otherUser = res;
    })
  }
  handleClick() {
    this.router.navigate(['inbox', this.anteprima.conversationId]);
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Conversazione } from 'src/app/models/Conversazione';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ConversationService } from 'src/app/services/conversation.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() id!: any;
  loggedId!: string | undefined;

  profile!: User;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private profileService: ProfileService,
    private conversationService: ConversationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (!this.id) {
        this.profileService.getLogged().subscribe((res) => {
          this.loggedId = res.id;
          this.id = this.loggedId;
          this.update();
        });
      } else {
        this.update();
      }
    });
  }

  update() {
    if (this.id) {
      this.profileService.getById(this.id).subscribe((res) => {
        this.profile = res;
        // this.profile.follower = 0;
        // this.profile.seguiti = 0;
        this.profile.position = 'Rende, Italia';
        this.profile.lastVisit = 'Ultima visita 1 ora fa';
        this.profile.emailVerified = true;
      });
    }
  }
  
  goToConverationWith() {
    this.conversationService.getPreview().subscribe((res) => {
      let otherConv = null;
      let conv = res.filter(converation => 
        (converation.prodottoCorrelato == null || converation.prodottoCorrelato == "") && 
        converation.altroUtente == this.id )
      if (conv.length === 0) {
        this.route.navigate(['inbox'], { queryParams: { new: this.id } })
      } else {
        this.route.navigate(['inbox', conv[0].conversationId])
      }

    })

  }
}

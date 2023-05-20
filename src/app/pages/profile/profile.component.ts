import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() username!: any;
  loggedUsername!: string;

  profile!: User;
  constructor(
    private router: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.loggedUsername = 'paola';
    this.router.paramMap.subscribe((params) => {
      this.username = params.get('username');
      if (!this.username) {
        this.username = this.loggedUsername;
      }
      this.update();
    });
  }

  update() {
    if (this.username) {
      this.profileService.getOneByUsername(this.username).subscribe((res) => {
        this.profile = res;
        this.profile.follower = 0;
        this.profile.seguiti = 0;
        this.profile.position = 'Rende, Italia';
        this.profile.lastVisit = 'Ultima visita 1 ora fa';
        this.profile.emailVerified = true;
      });
    }
  }
}

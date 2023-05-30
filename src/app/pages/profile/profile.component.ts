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
  @Input() id!: any;
  loggedId!: string | undefined;

  profile!: User;
  constructor(
    private router: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {

    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (!this.id) {
        this.profileService.getLogged().subscribe((res) => {
          this.loggedId = res.id;
          this.id = this.loggedId;
          console.log("Logged id", this.loggedId)
        });
      }
      this.update();
    });
  }

  update() {
    console.log("Sono qui 1")
    if (this.id) {
      console.log("Sono qui 2")
      this.profileService.getById(this.id).subscribe((res) => {
        console.log("Sono qui 3")

        this.profile = res;
        this.profile.follower = 0;
        this.profile.seguiti = 0;
        this.profile.position = 'Rende, Italia';
        this.profile.lastVisit = 'Ultima visita 1 ora fa';
        this.profile.emailVerified = true;

        console.log("Logged profile", this.profile)
      });
    }
  }
}

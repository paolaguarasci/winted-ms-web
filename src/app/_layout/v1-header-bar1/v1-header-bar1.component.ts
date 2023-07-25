import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth.service';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { ProfileService } from './../../services/profile.service';
import { User } from 'src/app/models/User';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface SearchModes {
  name: string;
  code: string;
}
@Component({
  selector: 'app-v1-header-bar1',
  templateUrl: './v1-header-bar1.component.html',
  styleUrls: ['./v1-header-bar1.component.scss'],
  providers: [MessageService],
})
export class V1HeaderBar1Component implements OnInit, OnChanges {
  value!: string;
  searchModes!: SearchModes[];
  faEnvelope = faEnvelope;
  overlayNotificationAreaVisible!: boolean;
  numNotifiche!: string;
  userLogged!: User;
  selectedSearchModes!: SearchModes;
  searchtext!: string | null
  items!: MenuItem[];
  langs!: MenuItem[];
  kprofile !: KeycloakProfile | null;
  isLogged!: boolean;
  visible!: boolean;

  localesList = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
  ];

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  constructor(
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private profileService: ProfileService,
    // private keycloakService: KeycloakService
  ) {}

  async ngOnInit() {
    this.kprofile = null
    this.numNotifiche = '0';
    this.isLogged = await this.authService.checkCredentials();
    if (this.isLogged) {
      // this.kprofile = await this.keycloakService.loadUserProfile();
      this.profileService
        .getLogged()
        .subscribe((res) => (this.userLogged = res));
    }
    this.overlayNotificationAreaVisible = false;
    this.searchModes = [
      { name: $localize`Catalogo`, code: 'cat' },
      { name: $localize`Utenti`, code: 'user' },
    ];
    this.items = [
      {
        label: 'Account',
        items: [
          {
            label: $localize`Profilo`,
            routerLink: '/profile',
          },
          {
            label: $localize`Impostazioni`,
            routerLink: '/setup',
          },
          {
            label: $localize`Personalizzazione`,
            routerLink: '/personalize',
          },
          // {
          //   label: $localize`Saldo`,
          //   routerLink: '/fileupload',
          // },
          {
            label: $localize`Donazioni`,
            routerLink: '/donation',
          },
          {
            label: $localize`Esci`,
            command: () => {
              this.logout();
            },
          },
        ],
      },
    ];

    this.langs = [
      {
        label: 'Italiano',
        routerLink: '/it',
      },
      {
        label: 'Inglese',
        routerLink: '/en',
      },
    ];
  }
  ngOnChanges() {
    console.log("ciao")
  }
  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }
  goToInbox() {
    this.router.navigate(['inbox']);
  }

  goToHome() {
    this.router.navigate(['']);
  }

  toggleNotificationArea() {
    this.overlayNotificationAreaVisible = !this.overlayNotificationAreaVisible;
  }

  updateNumNotifiche(event) {
    console.log("header updateNumNotifiche ",event)
    this.numNotifiche = event;
  }

  logout() {
    this.authService.logout();
  }

  goToSearch(event) {
    this.router.navigate(['search'], { queryParams: { t: this.selectedSearchModes.code, s: this.searchtext }});
    this.searchtext = ""
  }

  closeOverlay(event) {
    this.overlayNotificationAreaVisible = false
  }

  goToPreferred() {
    this.router.navigate(['preferiti']);
  }
}

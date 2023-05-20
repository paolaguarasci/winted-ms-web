import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faEnvelope,  } from '@fortawesome/free-regular-svg-icons';
import { MenuItem, MessageService } from 'primeng/api';
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
export class V1HeaderBar1Component implements OnInit {
  value!: string;
  searchModes!: SearchModes[];
  faEnvelope = faEnvelope;

  selectedSearchModes!: SearchModes;

  items!: MenuItem[];
  langs!: MenuItem[];

  isLogged!: boolean;
  visible!: boolean;

  localesList = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
  ];

  showDialog() {
    this.visible = true;
  }
  constructor(
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLogged = true;
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
              this.update();
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
}

import { Component, OnInit } from '@angular/core';
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

  selectedSearchModes!: SearchModes;

  items!: MenuItem[];
  langs!: MenuItem[];

  isLogged!: boolean;
  visible!: boolean;

  showDialog() {
    this.visible = true;
  }
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.isLogged = false;
    this.searchModes = [
      { name: 'Catalogo', code: 'cat' },
      { name: 'Utenti', code: 'user' },
    ];
    this.items = [
      {
        label: 'Account',
        items: [
          {
            label: 'Profilo',
            routerLink: '/fileupload',
          },
          {
            label: 'Impostazioni',
            routerLink: '/fileupload',
          },
          {
            label: 'Personalizzazione',
            routerLink: '/fileupload',
          },
          // {
          //   label: 'Saldo',
          //   routerLink: '/fileupload',
          // },
          {
            label: 'Donazioni',
            routerLink: '/fileupload',
          },
          {
            label: 'Esci',
            style: 'color: red;',
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
        routerLink: '/fileupload',
      },
      {
        label: 'Inglese',
        routerLink: '/fileupload',
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
}

import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

interface City {
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
  cities!: City[];

  selectedCity!: City;

  items!: MenuItem[];
  langs!: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
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

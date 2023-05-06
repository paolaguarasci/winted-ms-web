import { Component, OnInit } from '@angular/core';

interface Brand {
  name: string;
}

@Component({
  selector: 'app-buy-brands',
  templateUrl: './buy-brands.component.html',
  styleUrls: ['./buy-brands.component.scss'],
})
export class BuyBrandsComponent implements OnInit {
  brands!: Brand[];
  ngOnInit(): void {
    this.brands = [
      {
        name: 'almost',
      },
      {
        name: 'dead',
      },
      {
        name: 'slight',
      },
      {
        name: 'whistle',
      },
      {
        name: 'almost',
      },
      {
        name: 'replace',
      },
      {
        name: 'select',
      },
      {
        name: 'salmon',
      },
      {
        name: 'hay',
      },
      {
        name: 'fight',
      },
    ];
  }
}

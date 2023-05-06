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
    this.brands = [];
    for (let i = 0; i < 25; i++) {
      this.brands.push({
        name: 'almost',
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-most-wanted',
  providers: [CurrencyPipe],
  templateUrl: './most-wanted.component.html',
  styleUrls: ['./most-wanted.component.scss'],
})
export class MostWantedComponent implements OnInit {
  products!: Product[];
  showUser!: boolean;
  constructor(private currencyPipe: CurrencyPipe) {}
  ngOnInit(): void {
    let demoUser = new User({
      name: '',
      image: '',
      rating: 4,
    });
    this.showUser = false;
    this.products = [];
    for (let i = 0; i < 6; i++) {
      this.products.push(new Product({
        featured: "https://fakeimg.pl/200x300",
        description: "descrizione",
        resources: ['https://fakeimg.pl/200x300'],
        name: "titolo",
        owner: demoUser,
        price: this.currencyPipe.transform(10.0, 'EUR', 'symbol', '.2') ?? '',
        prefered: 3,
        size: $localize`14 anni / 164 cm`,
        brand: 'H&M',
      }));
    }
  }
}

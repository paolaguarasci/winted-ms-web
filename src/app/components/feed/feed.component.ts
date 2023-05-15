import { Component, Input, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models/Product';

interface User {
  name: string;
  image: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  providers: [CurrencyPipe],
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() products!: Product[];
  showUser!: boolean;

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.showUser = true;
    // this.products = [];
    // for (let i = 0; i < 36; i++) {
    //   this.products.push({
    //     user: {
    //       name: 'user',
    //       image: 'https://i.pravatar.cc/300',
    //     },
    //     img: 'https://fakeimg.pl/200x300',
    //     price:
    //       this.currencyPipe.transform(10.0, 'EUR', 'symbol', '.2') ?? '',
    //     prefered: 3,
    //     size: $localize`14 anni / 164 cm`,
    //     brand: 'H&M',
    //   });
    // }
  }
}

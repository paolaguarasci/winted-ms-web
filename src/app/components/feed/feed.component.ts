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
  @Input() query!: any;
  showUser!: boolean;

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.showUser = true;
  }
}

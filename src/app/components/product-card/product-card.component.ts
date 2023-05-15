import { Component, Input, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  providers: [CurrencyPipe, MessageService],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() showUser!: boolean;
  constructor(private currencyPipe: CurrencyPipe, private router: Router, private messageService: MessageService) {}
  ngOnInit(): void {
    if (!this.product.featured && !this.product.resources) {
      this.product.featured = 'https://fakeimg.pl/200x300';
    } else if (!this.product.featured && this.product.resources.length > 0) {
      this.product.featured =
        'http://localhost:8080/api/v1/resource/image/' +
        this.product.resources[0];
    }
    let originalPrice = parseFloat(this.product.price);
    this.product.price =
      this.currencyPipe.transform(originalPrice, 'EUR', 'symbol', '.2') ?? '';
  }

  handleClick() {
    this.router.navigate(['product', this.product.id]);
  }

  addToPreferred()  {
    this.messageService.add({
      severity: 'success',
      summary: 'Ok!',
      detail: 'Prodotto '+ this.product.id +' aggiunto ai preferiti',
    })
  }
}

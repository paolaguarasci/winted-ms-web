import { Component, Input, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/Product';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'product-card',
  providers: [CurrencyPipe, MessageService],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() owner!: any;
  @Input() showUser!: boolean;
  venduto!: boolean;
  constructor(private currencyPipe: CurrencyPipe, private router: Router, private messageService: MessageService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.venduto = this.product.bought;
    if (!this.product.featured && !this.product.resources) {
      this.product.featured = 'https://fakeimg.pl/200x300';
    } else if (!this.product.featured && this.product.resources.length > 0) {
      this.product.featured =
        '/api/v1/resource/image/' +
        this.product.resources[0];
    }
    let originalPrice = parseFloat(this.product.price);
    this.product.price =
      this.currencyPipe.transform(originalPrice, 'EUR', 'symbol', '.2') ?? '';
    console.log("PRODOTTO", this.product)
    console.log("OWNER", this.owner)
    if (this.owner === undefined && this.showUser === true) {
      console.log("cerco")
      console.log("PRODOTTO", this.product)
      this.profileService.getById(this.product.owner).subscribe(res => this.owner=res)
    }
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

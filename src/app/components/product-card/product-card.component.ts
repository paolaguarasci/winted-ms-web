import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/Product';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';

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
  @Output() changePreferred: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private currencyPipe: CurrencyPipe,
    private router: Router,
    private messageService: MessageService,
    private profileService: ProfileService,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.update();
  }

  update() {
    this.venduto = false;
    if (this.product.bought === 'true') {
      this.venduto = true;
    }
    if (!this.product.featured && !this.product.resources) {
      this.product.featured = 'https://fakeimg.pl/200x300';
    } else if (!this.product.featured && this.product.resources.length > 0) {
      this.product.featured =
        '/api/v1/resource/image/' + this.product.resources[0];
    }
    let originalPrice = parseFloat(this.product.price);
    this.product.price =
      this.currencyPipe.transform(originalPrice, 'EUR', 'symbol', '.2') ?? '';
    if (this.owner === undefined && this.showUser === true) {
      this.profileService
        .getById(this.product.owner)
        .subscribe((res) => (this.owner = res));
    }
  }

  handleClick() {
    this.router.navigate(['product', this.product.id]);
  }

  addToPreferred() {
    if (this.authService.checkCredentials()){
    this.profileService.addPreferred(this.product.id).subscribe((res1) => {
      console.log('sono qui 1', res1);

      if (res1) {
        console.log('sono qui 2');
        if (this.product.id) {
          this.productService.getById(this.product.id).subscribe((res2) => {
            this.product = res2;
            this.update();
            this.changePreferred.emit('change1');
            this.messageService.add({
              severity: 'success',
              summary: 'Ok!',
              detail: 'Prodotto ' + this.product.id + ' aggiunto ai preferiti',
            });
          });
        }
      }

      if (!res1) {
        console.log('sono qui 3');
        this.profileService
          .removeToPreferred(this.product.id)
          .subscribe((res1) => {
            if (this.product.id) {
              this.productService.getById(this.product.id).subscribe((res2) => {
                this.product = res2;
                this.update();
                this.changePreferred.emit('change2');
                this.messageService.add({
                  severity: 'success',
                  summary: 'Ok!',
                  detail:
                    'Prodotto ' + this.product.id + ' rimosso dai preferiti',
                });
              });
            }
          });
      }
    });
  }
  }
}

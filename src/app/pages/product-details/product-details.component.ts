import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: any;
  product!: Product;
  owner!: User;
  ownerProducts!: Product[];
  articoliSimili!: Product[];
  isPreferred!: boolean;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private productService: ProductService,
    private profileService: ProfileService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.isPreferred = false;
    this.ownerProducts = [];
    this.articoliSimili = [];
    this.router.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.update();
    });
  }

  update() {
    this.productService.getById(this.productId).subscribe((res) => {
      this.product = res;

      this.productService.getSameById(this.productId).subscribe((res) => {
        this.articoliSimili = res;
      });

      this.profileService.getPreferred().subscribe((res) => {
        let preferiti = res;
        if (preferiti.indexOf(this.productId) != -1) {
          this.isPreferred = true;
        }
      });

      this.profileService.getById(this.product.owner).subscribe((res) => {
        this.owner = res;
        this.ownerProducts = [];
        this.productService.getByOwnerId(this.owner.id).subscribe((res) => {
          this.ownerProducts = res.filter((p) => p.id !== this.productId);
        });
      });
    });
  }

  goToProfile() {
    this.route.navigate(['profile', this.owner.username]);
  }

  goToMessagge() {
    this.route.navigate(['inbox'], {
      queryParams: {
        new: this.owner.id,
      },
    });
  }

  addToPreferred() {
    if (!this.isPreferred) {
      this.profileService.addPreferred(this.productId).subscribe((res) => {
        console.log('add to preferred', res);
      });
      this.isPreferred = true;
    }
  }

  removeToPreferred() {
    if (this.isPreferred) {
      this.profileService.removeToPreferred(this.productId).subscribe((res) => {
        console.log('removed to preferred', res);
      });
      this.isPreferred = false;
    }
  }

  makeAnOffert() {
    let offertPrice = 10;
    this.route.navigate(['inbox'], {
      queryParams: {
        offer_to: this.productId,
        offer_price: offertPrice,
      },
    });
  }

  buy() {
    let newOrder = new Order();
    newOrder.product = this.product.id ?? "";
    console.log("Nuovo ordine ", newOrder.product)
    this.orderService.newCheckout(newOrder).subscribe((res) => {
      this.route.navigate(['checkout'], {
        queryParams: {
          order_id: res.id,
        },
      });
    });
  }

  askInfo() {
    this.route.navigate(['inbox'], {
      queryParams: {
        info_about: this.productId,
      },
    });
  }

  follow() {
    alert('Follow');
  }
}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.ownerProducts = [];
    this.articoliSimili = [];
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.update();
    });
  }

  update() {
    this.productService.getById(this.productId).subscribe((res) => {
      this.product = res;

      this.productService.getSameById(this.productId).subscribe(res => {
        this.articoliSimili = res;
      })

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
    // go to user profile
  }
}

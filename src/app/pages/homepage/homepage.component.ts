import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})

export class HomepageComponent implements OnInit {
  isLogged!: boolean;
  products!: Product[];

  constructor(private productService: ProductService,
    private authService: AuthService) {}


  async ngOnInit() {
    this.isLogged = await this.authService.checkCredentials();
    this.productService.get().subscribe((results) => {
      this.products = results;
    });
  }

}

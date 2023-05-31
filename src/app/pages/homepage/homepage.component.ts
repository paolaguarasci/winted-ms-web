import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
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


  ngOnInit(): void {
    this.isLogged = this.authService.checkCredentials();
    this.productService.get().subscribe((results) => {
      this.products = results;
    });
  }

}

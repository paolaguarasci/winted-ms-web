import { Component, OnInit } from '@angular/core';

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

  constructor(private productService: ProductService) {}


  ngOnInit(): void {
    this.isLogged = true;
    this.productService.get().subscribe((results) => {
      this.products = results;
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';

interface User {
  name: string,
  image: string
}

interface Product{
  img: string,
  price: string,
  prefered: number,
  size: string,
  brand: string,
  user: User
}

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() showUser!: boolean;

  ngOnInit(): void {
  }
}

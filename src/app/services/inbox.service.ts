import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService extends ResourceService<Product> {
  constructor(private http: HttpClient) {
    super(http, Product, `https://dummyjson.com/products`);
  }
}

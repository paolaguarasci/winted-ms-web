import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ResourceService } from './resource.service';

@Injectable({ providedIn: 'root' })
export class ProductService extends ResourceService<Product> {
  constructor(private http: HttpClient) {
    super(http, Product, `https://dummyjson.com/products`);
  }
}
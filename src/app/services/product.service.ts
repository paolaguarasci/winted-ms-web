import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ResourceService } from './resource.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService extends ResourceService<Product> {
  constructor(private http: HttpClient) {
    super(http, Product, `https://dummyjson.com/products`);
  }

  public override create(data): Observable<Product> {
    const formData = new FormData();

    data.files.forEach((file: File) => {
      formData.append('files', file);
    });

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);

    const url: string = 'http://localhost:8080/product';

    return this.http.post<any>(url, formData);
  }
}

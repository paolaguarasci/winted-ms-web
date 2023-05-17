import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ResourceService } from './resource.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService extends ResourceService<Product> {
  constructor(private http: HttpClient) {
    super(http, Product, `http://localhost:8080/api/v1/product`);
  }

  public override create(data): Observable<Product> {
    const formData = new FormData();

    formData.append('name', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);

    data.files.forEach((file: File) => {
      formData.append('files', file);
    });

    const url: string = 'http://localhost:8080/api/v1/product';

    return this.http.post<any>(url, formData);
  }

  public getByOwnerId(ownerid): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?owner=' + ownerid);
  }


  public getSameById(productId): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?sameto=' + productId);
  }
}

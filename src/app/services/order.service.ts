import { HttpClient } from '@angular/common/http';
import { Inbox } from '../models/Inbox';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { OffertResponse } from '../models/OffertResponse';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({ providedIn: 'root' })
export class OrderService extends ResourceService<Order> {
  constructor(private http: HttpClient) {
    super(http, Order, `http://localhost:8080/api/v1/order`);
  }
  public buy(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}

import { HttpClient } from '@angular/common/http';
import { Inbox } from '../models/Inbox';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { OffertResponse } from '../models/OffertResponse';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { OrderUpdate } from '../models/OrderUpdate';

@Injectable({ providedIn: 'root' })
export class OrderService extends ResourceService<Order> {
  constructor(private http: HttpClient) {
    super(http, Order, `/api/v1/order`);
  }

  public buy(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + '/confirm', order);
  }

  public newCheckout(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + '/checkout', order);
  }

  public updateCheckout(id: string, order: OrderUpdate): Observable<Order> {
    console.log("Richiesta inviata", order)
    return this.http.put<Order>(this.apiUrl + '/checkout/'+id, order.toJson());
  }
}

import { HttpClient } from '@angular/common/http';
import { Inbox } from '../models/Inbox';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { OffertResponse } from '../models/OffertResponse';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class InboxService extends ResourceService<Inbox> {
  constructor(private http: HttpClient) {
    super(http, Inbox, `/api/v1/inbox`);
  }

  // todo ristrutturare alla fine sono tutti msg da inviare
  public makeAnOffert(productId, price): Observable<OffertResponse> {
    return this.http.post<OffertResponse>(this.apiUrl + '/offert', {
      product: productId,
      price: price
    });
  }

  public askInfo(productId): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/info', {
      product: productId
    });
  }

}

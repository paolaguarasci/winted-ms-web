import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { PaymentMethod } from '../models/PaymentMethod';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PaymentMethodService extends ResourceService<PaymentMethod> {
  constructor(private http: HttpClient) {
    super(http, PaymentMethod, `http://localhost:8080/api/v1/paymentmethod`);
  }


  getMine(): Observable<PaymentMethod> {
    return this.http.get<PaymentMethod>(this.apiUrl);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { OffertResponse } from '../models/OffertResponse';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';
@Injectable({ providedIn: 'root' })
export class AddressService extends ResourceService<Address> {
  constructor(private http: HttpClient) {
    super(http, Address, `/api/v1/address`);
  }

  getMine(): Observable<Address> {
    return this.http.get<Address>(this.apiUrl);
  }

}

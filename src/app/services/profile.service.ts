import { Conversazione } from '../models/Conversazione';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ProfileService extends ResourceService<User> {
  constructor(private http: HttpClient) {
    super(http, User, `http://localhost:8080/api/v1/profile`);
  }

  addPreferred(productId) {
    return this.http.post(this.apiUrl + '/preferred', {
      product: productId
    });
  }
  
}

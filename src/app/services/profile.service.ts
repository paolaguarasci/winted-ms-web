import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { User } from '../models/User';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ProfileService extends ResourceService<User> {
  constructor(private http: HttpClient) {
    super(http, User, `http://localhost:8080/api/v1/profile`);
  }

  getPreferred() {
    return this.http.get<Product[]>(this.apiUrl + '/preferred');
  }

  getWardrobe(username) {
    return this.http.get<any[]>(this.apiUrl + '/' + username + '/wardrobe');
  }

  addPreferred(productId) {
    return this.http.post(this.apiUrl + '/preferred', {
      product: productId,
    });
  }

  getLogged() {
    return this.http.get<User>(this.apiUrl + '/my');
  }

  removeToPreferred(productId) {
    return this.http.delete(this.apiUrl + '/preferred/' + productId);
  }

  getOneByUsername(username) {
    return this.http.get<User>(this.apiUrl + '/username/' + username);
  }
}

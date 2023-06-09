import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { OffertResponse } from '../models/OffertResponse';
import { Observable } from 'rxjs';
import { Notifica } from '../models/Notifica';
@Injectable({ providedIn: 'root' })
export class NotificheService extends ResourceService<Notifica> {
  constructor(private http: HttpClient) {
    super(http, Notifica, `/api/v1/notifica`);
  }

  getMine(): Observable<Notifica[]> {
    return this.http.get<Notifica[]>(this.apiUrl);
  }

  markRead(id: string, data: Notifica): Observable<Notifica> {
    return this.http.put<Notifica>(this.apiUrl + '/' + id, data);
  }
}

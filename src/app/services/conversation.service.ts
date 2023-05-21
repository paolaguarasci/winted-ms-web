import { Conversazione } from './../models/Conversazione';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { Observable } from 'rxjs';
import { AnteprimaInbox } from '../models/AnteprimaInbox';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ConversationService extends ResourceService<Conversazione> {
  constructor(private http: HttpClient) {
    super(http, Conversazione, `http://localhost:8080/api/v1/conversation`);
  }

  getPreview(): Observable<AnteprimaInbox[]> {
    return this.http.get<AnteprimaInbox[]>(this.apiUrl);
  }


}

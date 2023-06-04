import { Conversazione } from './../models/Conversazione';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { Observable } from 'rxjs';
import { AnteprimaInbox } from '../models/AnteprimaInbox';
import { MessaggioConversazione } from '../models/MessaggioConversazione';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ConversationService extends ResourceService<Conversazione> {
  constructor(private http: HttpClient) {
    super(http, Conversazione, `/api/v1/conversation`);
  }

  getPreview(): Observable<AnteprimaInbox[]> {
    return this.http.get<AnteprimaInbox[]>(this.apiUrl);
  }

  addMessage(id: string, message: MessaggioConversazione): Observable<Conversazione> {
    return this.http.post<Conversazione>(this.apiUrl + '/' + id + '/newmsg', message);
  }

}

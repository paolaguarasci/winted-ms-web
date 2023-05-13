import { HttpClient } from '@angular/common/http';
import { Inbox } from '../models/Inbox';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable({ providedIn: 'root' })
export class InboxService extends ResourceService<Inbox> {
  constructor(private http: HttpClient) {
    super(http, Inbox, `https://dummyjson.com/inboxs`);
  }
}

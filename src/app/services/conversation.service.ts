import { Conversazione } from './../models/Conversazione';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ConversationService extends ResourceService<Conversazione> {
  constructor(private http: HttpClient) {
    super(http, Conversazione, `https://dummyjson.com/converazione`);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notifica } from 'src/app/models/Notifica';

@Component({
  selector: 'app-notifiche-single-row',
  templateUrl: './notifiche-single-row.component.html',
  styleUrls: ['./notifiche-single-row.component.scss'],
})
export class NotificheSingleRowComponent implements OnInit {
  @Input() notifica!: Notifica;
  @Output() readNotifica: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() {}
  ngOnInit(): void {}

  handleRead() {
    this.readNotifica.emit(true);
  }
}

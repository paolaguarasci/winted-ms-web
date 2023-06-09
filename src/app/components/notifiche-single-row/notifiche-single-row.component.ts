import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notifica } from 'src/app/models/Notifica';
import { Product } from 'src/app/models/Product';
import { NotificheService } from 'src/app/services/notifiche.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-notifiche-single-row',
  templateUrl: './notifiche-single-row.component.html',
  styleUrls: ['./notifiche-single-row.component.scss'],
})
export class NotificheSingleRowComponent implements OnInit {
  @Input() notifica!: Notifica;
  @Output() readNotifica: EventEmitter<boolean> = new EventEmitter<boolean>();
  prodottoCorrelato!: Product
  
  constructor(private productService: ProductService, 
    private notificheService: NotificheService) {}
  
    ngOnInit(): void {
    if (this.notifica.prodottoCorrelato && this.notifica.prodottoCorrelato != "") {
      this.productService.getById(this.notifica.prodottoCorrelato).subscribe((res) => {
        this.prodottoCorrelato = res;
        if (!this.prodottoCorrelato.featured && !this.prodottoCorrelato.resources) {
          this.prodottoCorrelato.featured = 'https://fakeimg.pl/200x300';
        } else if (!this.prodottoCorrelato.featured && this.prodottoCorrelato.resources.length > 0) {
          this.prodottoCorrelato.featured =
            '/api/v1/resource/image/' +
            this.prodottoCorrelato.resources[0];
        }

      })
    }
  }

  handleRead() {
    if (this.notifica?.id) {
      this.notificheService.markRead(this.notifica.id, this.notifica).subscribe((res) => {
        this.notifica = res;
        this.readNotifica.emit(true);
      })
    }
  }
}

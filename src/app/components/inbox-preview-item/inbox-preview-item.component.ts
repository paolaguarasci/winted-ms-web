import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { AnteprimaInbox } from 'src/app/models/AnteprimaInbox';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';
import { ResourceService } from 'src/app/services/resource.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inbox-preview-item',
  templateUrl: './inbox-preview-item.component.html',
  styleUrls: ['./inbox-preview-item.component.scss'],
})
export class InboxPreviewItemComponent implements OnInit {
  @Input() anteprima!: AnteprimaInbox;
  @Input() routerId!: string;
  otherUser!: User;
  prodottoCorrelato!: Product | null;
  previewImage!: String | null;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private profileService: ProfileService,
    private productService: ProductService) {}
  ngOnInit(): void {
    this.profileService.getById(this.anteprima.altroUtente).subscribe((res) => {
      this.otherUser = res;
    })
    this.getProduct();
  }

  getProduct() {
    this.prodottoCorrelato = null;
    if(this.anteprima?.prodottoCorrelato) {
      this.productService.getById(this.anteprima?.prodottoCorrelato).subscribe((res) => {
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
  handleClick() {
    this.router.navigate(['inbox', this.anteprima.conversationId]);
  }
}

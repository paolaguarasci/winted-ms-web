import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-wardrobe',
  templateUrl: './profile-wardrobe.component.html',
  styleUrls: ['./profile-wardrobe.component.scss'],
})
export class ProfileWardrobeComponent implements OnInit {
  @Input() user!: User;
  productList!: Product[];
  numElement!: number;
  constructor(
    private profileService: ProfileService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productList = [];
    this.productService.getByOwnerId(this.user.id).subscribe((res) => {
      this.productList = res;
      this.numElement = this.productList.length;
    });
  }
}

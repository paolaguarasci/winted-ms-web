import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: any;
  product!: Product;

  displayCustom!: boolean;
  activeIndex: number = 0;
  images!: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.update();
    });
  }

  update() {
    this.productService.getById(this.productId).subscribe((res) => {
      this.product = res;


      let r1 = this.product.resources[0];
      let r2 = this.product.resources[1];

      this.product.resources.push(r1);
      this.product.resources.push(r2);
      this.product.resources.push(r1);
      this.product.resources.push(r2);

      let newUser = new User({
        name: "Ciccio Pasticcio",
        image: "https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png",
        rating: 4
      });

      this.product.owner = newUser

      this.images = [];
      this.images.push({
        // itemImageSrc: 'http://localhost:8080/api/v1/resource/image/' + this.product.resources[0],
        // thumbnailImageSrc: 'http://localhost:8080/api/v1/resource/image/' + this.product.resources[0],
        itemImageSrc: 'https://placehold.co/600x400.png',
        thumbnailImageSrc: 'https://placehold.co/600x400.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      });
   });
  }

  goToProfile() {
    // go to user profile
  }
}

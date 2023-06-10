import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {
  preferitiID!: String[]
  products: Product[] = [];

  constructor(private profileService: ProfileService, private productService: ProductService) {}

  ngOnInit(): void {
    this.doUpdate();
  }
  onUpdate() {
    console.log("update")
    this.doUpdate();
  }

  doUpdate() {
    this.products = []
    this.profileService.getPreferred().subscribe((res) => {      
      this.preferitiID = res;
      this.preferitiID.forEach((preferito) => {
        this.productService.getById(preferito.toString()).subscribe((res) => {
          this.products.push(res)
        })
      })
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-brands-single-brands',
  templateUrl: './buy-brands-single-brands.component.html',
  styleUrls: ['./buy-brands-single-brands.component.scss'],
})
export class BuyBrandsSingleBrandsComponent implements OnInit {
  @Input() name!: string;
  ngOnInit(): void {}
}

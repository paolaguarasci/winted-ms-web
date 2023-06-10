import { Component, OnInit } from '@angular/core';
interface Product{
  img: string,
  price: string,
  preferred: number,
  size: string,
  brand: string
}
@Component({
  selector: 'app-armadio-evidenza',
  templateUrl: './armadio-evidenza.component.html',
  styleUrls: ['./armadio-evidenza.component.scss'],
})
export class ArmadioEvidenzaComponent implements OnInit {
  products!: Product[];
  ngOnInit(): void {}
}

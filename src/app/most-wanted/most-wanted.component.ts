import { Component, OnInit } from '@angular/core';

interface Product {
  img: string;
  price: string;
  prefered: number;
  size: string;
  brand: string;
  user: User;
}
interface User {
  name: string;
  image: string;
}
@Component({
  selector: 'app-most-wanted',
  templateUrl: './most-wanted.component.html',
  styleUrls: ['./most-wanted.component.scss'],
})
export class MostWantedComponent implements OnInit {
  products!: Product[];
  showUser!: boolean;

  ngOnInit(): void {
    this.showUser = false;
    this.products = [];
    for (let i = 0; i < 6; i++) {
      this.products.push({
        user: {
          name: 'ciccio',
          image: 'https://i.pravatar.cc/300',
        },
        img: 'https://fakeimg.pl/200x300',
        price: '10.00',
        prefered: 3,
        size: '14 anni / 164 cm',
        brand: 'H&M',
      });
    }
  }
}

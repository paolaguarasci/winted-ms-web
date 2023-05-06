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
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  products!: Product[];
  showUser!: boolean;

  ngOnInit(): void {
    this.showUser = true;
    this.products = [];
    for (let i = 0; i < 36; i++) {
      this.products.push({
        user: {
          name: 'user',
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

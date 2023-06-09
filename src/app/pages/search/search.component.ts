import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  fullTextSearch!: string | null;
  searchMode!: string | null;
  prodotti!: Product[] | any[];
  utenti!: User[] | any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private profileService: ProfileService

    ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.fullTextSearch = params.get('s');
      this.searchMode = params.get('t');
      if(this.searchMode === 'cat') {
        this.ricercaProdotti(this.fullTextSearch)
      } else {
        this.ricercaUtenti(this.fullTextSearch)
      }
    });
  }

  ricercaUtenti(query) {
    this.utenti = []
    console.log("Ricerco utenti con la query", query)
    this.profileService.search(query).subscribe((res) => {
      this.utenti = res
    })
  }

  ricercaProdotti(query) {
    this.prodotti = []
    console.log("Ricerco prodotti con la query", query)
    this.productService.search(query).subscribe((res) => {
      this.prodotti = res
    })
  }

  goToUserProfile(utente: User) {
    this.router.navigate(['profile', utente.id]);
  }

  goToProduct(product: Product) {
    this.router.navigate(['product', product.id]);
  }
  
}

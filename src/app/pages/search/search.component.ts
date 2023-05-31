import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  fullTextSearch!: string | null;
  searchMode!: string | null;  

  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
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
    console.log("Ricerco utenti con la query", query)
  }

  ricercaProdotti(query) {
    console.log("Ricerco prodotti con la query", query)
  }
  
}

import { Component, OnInit } from '@angular/core';
interface Suggested {
  name: string;
  view: string;
}
@Component({
  selector: 'app-recearch-suggested',
  templateUrl: './recearch-suggested.component.html',
  styleUrls: ['./recearch-suggested.component.scss'],
})
export class RecearchSuggestedComponent implements OnInit {
  suggesteds!: Suggested[];
  responsiveOptions!: any[];
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 10,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.suggesteds = [];
    for (let i = 0; i < 20; i++) {
      this.suggesteds.push({
        name: 'Brand',
        view: '1.3M',
      });
    }
  }
}

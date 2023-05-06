import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recearch-suggested-single',
  templateUrl: './recearch-suggested-single.component.html',
  styleUrls: ['./recearch-suggested-single.component.scss'],
})
export class RecearchSuggestedSingleComponent implements OnInit {
  name!: string;
  view!: string;
  ngOnInit(): void {
    this.name = 'Borse';
    this.view = "8.45M"
  }
}

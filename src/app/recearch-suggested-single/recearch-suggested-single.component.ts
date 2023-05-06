import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recearch-suggested-single',
  templateUrl: './recearch-suggested-single.component.html',
  styleUrls: ['./recearch-suggested-single.component.scss'],
})
export class RecearchSuggestedSingleComponent implements OnInit {
  @Input() name!: string;
  @Input() view!: string;
  ngOnInit(): void {}
}

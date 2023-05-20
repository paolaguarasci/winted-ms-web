import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-profile-review-single',
  templateUrl: './profile-review-single.component.html',
  styleUrls: ['./profile-review-single.component.scss']
})
export class ProfileReviewSingleComponent implements OnInit {
  @Input() review!: Review;

  ngOnInit(): void {
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile-review-list',
  templateUrl: './profile-review-list.component.html',
  styleUrls: ['./profile-review-list.component.scss'],
})
export class ProfileReviewListComponent implements OnInit {
  @Input() user!: User;
  reviewList!: Review[];
  ngOnInit(): void {
    let exampleReview = new Review({
      userid: '123',
      star: 3,
      textMessage: 'Tutto ok!',
      timesAgo: "1 ora fa"
    });
    this.reviewList = [];
    this.reviewList.push(exampleReview);
    this.reviewList.push(exampleReview);
    this.reviewList.push(exampleReview);
  }
}

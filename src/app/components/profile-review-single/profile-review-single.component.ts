import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { User } from 'src/app/models/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-review-single',
  templateUrl: './profile-review-single.component.html',
  styleUrls: ['./profile-review-single.component.scss'],
})
export class ProfileReviewSingleComponent implements OnInit {
  @Input() review!: Review;
  reviewAuthor!: User;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.review.userid = "6464d3155ded8d052d323c2a"

    this.profileService.getById(this.review.userid).subscribe((res) => {
      this.reviewAuthor = res;
      console.log(res)
    });
  }
}

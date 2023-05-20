import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReviewSingleComponent } from './profile-review-single.component';

describe('ProfileReviewSingleComponent', () => {
  let component: ProfileReviewSingleComponent;
  let fixture: ComponentFixture<ProfileReviewSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileReviewSingleComponent]
    });
    fixture = TestBed.createComponent(ProfileReviewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

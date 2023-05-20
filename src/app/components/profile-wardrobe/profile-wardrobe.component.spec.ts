import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWardrobeComponent } from './profile-wardrobe.component';

describe('ProfileWardrobeComponent', () => {
  let component: ProfileWardrobeComponent;
  let fixture: ComponentFixture<ProfileWardrobeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileWardrobeComponent]
    });
    fixture = TestBed.createComponent(ProfileWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecearchSuggestedSingleComponent } from './recearch-suggested-single.component';

describe('RecearchSuggestedSingleComponent', () => {
  let component: RecearchSuggestedSingleComponent;
  let fixture: ComponentFixture<RecearchSuggestedSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecearchSuggestedSingleComponent]
    });
    fixture = TestBed.createComponent(RecearchSuggestedSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

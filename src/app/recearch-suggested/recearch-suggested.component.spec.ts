import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecearchSuggestedComponent } from './recearch-suggested.component';

describe('RecearchSuggestedComponent', () => {
  let component: RecearchSuggestedComponent;
  let fixture: ComponentFixture<RecearchSuggestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecearchSuggestedComponent]
    });
    fixture = TestBed.createComponent(RecearchSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

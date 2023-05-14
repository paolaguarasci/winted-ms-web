import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPreviewItemComponent } from './inbox-preview-item.component';

describe('InboxPreviewItemComponent', () => {
  let component: InboxPreviewItemComponent;
  let fixture: ComponentFixture<InboxPreviewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxPreviewItemComponent]
    });
    fixture = TestBed.createComponent(InboxPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

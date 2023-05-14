import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxConversationItemComponent } from './inbox-conversation-item.component';

describe('InboxConversationItemComponent', () => {
  let component: InboxConversationItemComponent;
  let fixture: ComponentFixture<InboxConversationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxConversationItemComponent]
    });
    fixture = TestBed.createComponent(InboxConversationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

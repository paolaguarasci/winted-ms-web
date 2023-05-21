import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificheDropDownComponent } from './notifiche-drop-down.component';

describe('NotificheDropDownComponent', () => {
  let component: NotificheDropDownComponent;
  let fixture: ComponentFixture<NotificheDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificheDropDownComponent]
    });
    fixture = TestBed.createComponent(NotificheDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

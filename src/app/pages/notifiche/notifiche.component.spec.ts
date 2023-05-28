import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificheComponent } from './notifiche.component';

describe('NotificheComponent', () => {
  let component: NotificheComponent;
  let fixture: ComponentFixture<NotificheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificheComponent]
    });
    fixture = TestBed.createComponent(NotificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

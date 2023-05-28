import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificheSingleRowComponent } from './notifiche-single-row.component';

describe('NotificheSingleRowComponent', () => {
  let component: NotificheSingleRowComponent;
  let fixture: ComponentFixture<NotificheSingleRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificheSingleRowComponent]
    });
    fixture = TestBed.createComponent(NotificheSingleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

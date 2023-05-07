import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWantedComponent } from './most-wanted.component';

describe('MostWantedComponent', () => {
  let component: MostWantedComponent;
  let fixture: ComponentFixture<MostWantedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostWantedComponent]
    });
    fixture = TestBed.createComponent(MostWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

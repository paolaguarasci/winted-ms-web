import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FooterLine3Component } from './v1-footer-line3.component';

describe('V1FooterLine3Component', () => {
  let component: V1FooterLine3Component;
  let fixture: ComponentFixture<V1FooterLine3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1FooterLine3Component]
    });
    fixture = TestBed.createComponent(V1FooterLine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

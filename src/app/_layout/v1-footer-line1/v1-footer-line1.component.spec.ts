import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FooterLine1Component } from './v1-footer-line1.component';

describe('V1FooterLine1Component', () => {
  let component: V1FooterLine1Component;
  let fixture: ComponentFixture<V1FooterLine1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1FooterLine1Component]
    });
    fixture = TestBed.createComponent(V1FooterLine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

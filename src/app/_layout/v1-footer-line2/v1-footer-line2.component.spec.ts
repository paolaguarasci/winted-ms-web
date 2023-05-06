import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FooterLine2Component } from './v1-footer-line2.component';

describe('V1FooterLine2Component', () => {
  let component: V1FooterLine2Component;
  let fixture: ComponentFixture<V1FooterLine2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1FooterLine2Component]
    });
    fixture = TestBed.createComponent(V1FooterLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

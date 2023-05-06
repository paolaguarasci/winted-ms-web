import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1HeaderBar2Component } from './v1-header-bar2.component';

describe('V1HeaderBar2Component', () => {
  let component: V1HeaderBar2Component;
  let fixture: ComponentFixture<V1HeaderBar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1HeaderBar2Component]
    });
    fixture = TestBed.createComponent(V1HeaderBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

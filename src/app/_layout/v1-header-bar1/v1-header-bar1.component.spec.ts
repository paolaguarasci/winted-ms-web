import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1HeaderBar1Component } from './v1-header-bar1.component';

describe('V1HeaderBar1Component', () => {
  let component: V1HeaderBar1Component;
  let fixture: ComponentFixture<V1HeaderBar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1HeaderBar1Component]
    });
    fixture = TestBed.createComponent(V1HeaderBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

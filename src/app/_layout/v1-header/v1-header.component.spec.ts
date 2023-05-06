import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1HeaderComponent } from './v1-header.component';

describe('V1HeaderComponent', () => {
  let component: V1HeaderComponent;
  let fixture: ComponentFixture<V1HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1HeaderComponent]
    });
    fixture = TestBed.createComponent(V1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

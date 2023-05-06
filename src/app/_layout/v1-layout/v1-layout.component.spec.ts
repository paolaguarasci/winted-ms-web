import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1LayoutComponent } from './v1-layout.component';

describe('V1LayoutComponent', () => {
  let component: V1LayoutComponent;
  let fixture: ComponentFixture<V1LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1LayoutComponent]
    });
    fixture = TestBed.createComponent(V1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

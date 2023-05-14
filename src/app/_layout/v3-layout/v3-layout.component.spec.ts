import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3LayoutComponent } from './v3-layout.component';

describe('V3LayoutComponent', () => {
  let component: V3LayoutComponent;
  let fixture: ComponentFixture<V3LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V3LayoutComponent]
    });
    fixture = TestBed.createComponent(V3LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

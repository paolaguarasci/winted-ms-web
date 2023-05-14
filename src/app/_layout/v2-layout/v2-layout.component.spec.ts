import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2LayoutComponent } from './v2-layout.component';

describe('V2LayoutComponent', () => {
  let component: V2LayoutComponent;
  let fixture: ComponentFixture<V2LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V2LayoutComponent]
    });
    fixture = TestBed.createComponent(V2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

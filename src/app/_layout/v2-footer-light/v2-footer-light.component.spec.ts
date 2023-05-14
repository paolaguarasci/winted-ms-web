import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2FooterLightComponent } from './v2-footer-light.component';

describe('V2FooterLightComponent', () => {
  let component: V2FooterLightComponent;
  let fixture: ComponentFixture<V2FooterLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V2FooterLightComponent]
    });
    fixture = TestBed.createComponent(V2FooterLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FooterLightComponent } from './v1-footer-light.component';

describe('V1FooterLightComponent', () => {
  let component: V1FooterLightComponent;
  let fixture: ComponentFixture<V1FooterLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1FooterLightComponent]
    });
    fixture = TestBed.createComponent(V1FooterLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

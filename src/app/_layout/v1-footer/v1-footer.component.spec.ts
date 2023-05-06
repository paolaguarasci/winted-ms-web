import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FooterComponent } from './v1-footer.component';

describe('V1FooterComponent', () => {
  let component: V1FooterComponent;
  let fixture: ComponentFixture<V1FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1FooterComponent]
    });
    fixture = TestBed.createComponent(V1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

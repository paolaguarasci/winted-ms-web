import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadioEvidenzaComponent } from './armadio-evidenza.component';

describe('ArmadioEvidenzaComponent', () => {
  let component: ArmadioEvidenzaComponent;
  let fixture: ComponentFixture<ArmadioEvidenzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmadioEvidenzaComponent]
    });
    fixture = TestBed.createComponent(ArmadioEvidenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1ModalLoginComponent } from './v1-modal-login.component';

describe('V1ModalLoginComponent', () => {
  let component: V1ModalLoginComponent;
  let fixture: ComponentFixture<V1ModalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V1ModalLoginComponent]
    });
    fixture = TestBed.createComponent(V1ModalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

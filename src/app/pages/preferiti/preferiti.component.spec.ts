import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitiComponent } from './preferiti.component';

describe('PreferitiComponent', () => {
  let component: PreferitiComponent;
  let fixture: ComponentFixture<PreferitiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferitiComponent]
    });
    fixture = TestBed.createComponent(PreferitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

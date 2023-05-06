import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBrandsComponent } from './buy-brands.component';

describe('BuyBrandsComponent', () => {
  let component: BuyBrandsComponent;
  let fixture: ComponentFixture<BuyBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyBrandsComponent]
    });
    fixture = TestBed.createComponent(BuyBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

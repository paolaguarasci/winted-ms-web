import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBrandsSingleBrandsComponent } from './buy-brands-single-brands.component';

describe('BuyBrandsSingleBrandsComponent', () => {
  let component: BuyBrandsSingleBrandsComponent;
  let fixture: ComponentFixture<BuyBrandsSingleBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyBrandsSingleBrandsComponent]
    });
    fixture = TestBed.createComponent(BuyBrandsSingleBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

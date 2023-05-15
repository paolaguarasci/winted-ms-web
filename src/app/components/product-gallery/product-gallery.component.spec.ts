import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGalleryComponent } from './product-gallery.component';

describe('ProductGalleryComponent', () => {
  let component: ProductGalleryComponent;
  let fixture: ComponentFixture<ProductGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGalleryComponent]
    });
    fixture = TestBed.createComponent(ProductGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

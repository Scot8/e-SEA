import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveVendorDetailsPageComponent } from './retrieve-vendor-details-page.component';

describe('RetrieveVendorDetailsPageComponent', () => {
  let component: RetrieveVendorDetailsPageComponent;
  let fixture: ComponentFixture<RetrieveVendorDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveVendorDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveVendorDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

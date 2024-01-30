import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestorDetailsPageComponent } from './service-requestor-details-page.component';

describe('ServiceRequestorDetailsPageComponent', () => {
  let component: ServiceRequestorDetailsPageComponent;
  let fixture: ComponentFixture<ServiceRequestorDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestorDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestorDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServicesDetailsPageComponent } from './manage-services-details-page.component';

describe('ManageServicesDetailsPageComponent', () => {
  let component: ManageServicesDetailsPageComponent;
  let fixture: ComponentFixture<ManageServicesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageServicesDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageServicesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

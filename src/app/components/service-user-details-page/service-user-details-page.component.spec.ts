import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUserDetailsPageComponent } from './service-user-details-page.component';

describe('ServiceUserDetailsPageComponent', () => {
  let component: ServiceUserDetailsPageComponent;
  let fixture: ComponentFixture<ServiceUserDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUserDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndAllServicesPageComponent } from './end-all-services-page.component';

describe('EndAllServicesPageComponent', () => {
  let component: EndAllServicesPageComponent;
  let fixture: ComponentFixture<EndAllServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndAllServicesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndAllServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

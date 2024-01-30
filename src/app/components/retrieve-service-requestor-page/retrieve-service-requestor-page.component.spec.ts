import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveServiceRequestorPageComponent } from './retrieve-service-requestor-page.component';

describe('RetrieveServiceRequestorPageComponent', () => {
  let component: RetrieveServiceRequestorPageComponent;
  let fixture: ComponentFixture<RetrieveServiceRequestorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveServiceRequestorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveServiceRequestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllVendorsDetailsPageComponent } from './display-all-vendors-details-page.component';

describe('DisplayAllVendorsDetailsPageComponent', () => {
  let component: DisplayAllVendorsDetailsPageComponent;
  let fixture: ComponentFixture<DisplayAllVendorsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllVendorsDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllVendorsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

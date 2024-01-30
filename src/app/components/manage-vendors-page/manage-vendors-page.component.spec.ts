import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVendorsPageComponent } from './manage-vendors-page.component';

describe('ManageVendorsPageComponent', () => {
  let component: ManageVendorsPageComponent;
  let fixture: ComponentFixture<ManageVendorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVendorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVendorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

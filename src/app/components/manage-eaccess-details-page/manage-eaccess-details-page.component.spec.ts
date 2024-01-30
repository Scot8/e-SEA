import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEaccessDetailsPageComponent } from './manage-eaccess-details-page.component';

describe('ManageEaccessDetailsPageComponent', () => {
  let component: ManageEaccessDetailsPageComponent;
  let fixture: ComponentFixture<ManageEaccessDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEaccessDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEaccessDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

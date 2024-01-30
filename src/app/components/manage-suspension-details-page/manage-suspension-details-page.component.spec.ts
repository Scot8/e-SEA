import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuspensionDetailsPageComponent } from './manage-suspension-details-page.component';

describe('ManageSuspensionDetailsPageComponent', () => {
  let component: ManageSuspensionDetailsPageComponent;
  let fixture: ComponentFixture<ManageSuspensionDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSuspensionDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSuspensionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

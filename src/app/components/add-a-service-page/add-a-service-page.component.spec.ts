import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAServicePageComponent } from './add-a-service-page.component';

describe('AddAServicePageComponent', () => {
  let component: AddAServicePageComponent;
  let fixture: ComponentFixture<AddAServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

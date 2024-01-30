import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveServiceUserPageComponent } from './retrieve-service-user-page.component';

describe('RetrieveServiceUserPageComponent', () => {
  let component: RetrieveServiceUserPageComponent;
  let fixture: ComponentFixture<RetrieveServiceUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveServiceUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveServiceUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

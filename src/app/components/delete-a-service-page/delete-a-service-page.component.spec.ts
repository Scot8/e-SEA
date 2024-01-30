import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAServicePageComponent } from './delete-a-service-page.component';

describe('DeleteAServicePageComponent', () => {
  let component: DeleteAServicePageComponent;
  let fixture: ComponentFixture<DeleteAServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

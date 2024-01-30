import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCertificateAuthorityPageComponent } from './validate-certificate-authority-page.component';

describe('ValidateCertificateAuthorityPageComponent', () => {
  let component: ValidateCertificateAuthorityPageComponent;
  let fixture: ComponentFixture<ValidateCertificateAuthorityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCertificateAuthorityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCertificateAuthorityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceRequestorDetailsService } from './service-requestor-details.service';

describe('ServiceRequestorDetailsService', () => {
  let service: ServiceRequestorDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequestorDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

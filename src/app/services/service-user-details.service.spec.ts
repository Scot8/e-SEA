import { TestBed } from '@angular/core/testing';

import { ServiceUserDetailsService } from './service-user-details.service';

describe('ServiceUserDetailsService', () => {
  let service: ServiceUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

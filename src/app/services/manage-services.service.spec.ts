import { TestBed } from '@angular/core/testing';

import { ManageServicesService } from './manage-services.service';

describe('ManageServicesService', () => {
  let service: ManageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServicecallwebapiService } from './servicecallwebapi.service';

describe('ServicecallwebapiService', () => {
  let service: ServicecallwebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecallwebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NetworktypeserviceService } from './networktypeservice.service';

describe('NetworktypeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworktypeserviceService]
    });
  });

  it('should be created', inject([NetworktypeserviceService], (service: NetworktypeserviceService) => {
    expect(service).toBeTruthy();
  }));
});

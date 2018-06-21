import { TestBed, inject } from '@angular/core/testing';

import { BlocksService } from './blocks.service';

describe('BlocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlocksService]
    });
  });

  it('should be created', inject([BlocksService], (service: BlocksService) => {
    expect(service).toBeTruthy();
  }));
});

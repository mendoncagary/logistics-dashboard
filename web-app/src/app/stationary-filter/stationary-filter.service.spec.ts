import { TestBed, inject } from '@angular/core/testing';

import { StationaryFilterService } from './stationary-filter.service';

describe('StationaryFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationaryFilterService]
    });
  });

  it('should be created', inject([StationaryFilterService], (service: StationaryFilterService) => {
    expect(service).toBeTruthy();
  }));
});

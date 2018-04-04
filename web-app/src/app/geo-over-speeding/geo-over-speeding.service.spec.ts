import { TestBed, inject } from '@angular/core/testing';

import { GeoOverSpeedingService } from './geo-over-speeding.service';

describe('GeoOverSpeedingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoOverSpeedingService]
    });
  });

  it('should be created', inject([GeoOverSpeedingService], (service: GeoOverSpeedingService) => {
    expect(service).toBeTruthy();
  }));
});

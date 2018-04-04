import { TestBed, inject } from '@angular/core/testing';

import { GeoDwellService } from './geo-dwell.service';

describe('GeoDwellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoDwellService]
    });
  });

  it('should be created', inject([GeoDwellService], (service: GeoDwellService) => {
    expect(service).toBeTruthy();
  }));
});

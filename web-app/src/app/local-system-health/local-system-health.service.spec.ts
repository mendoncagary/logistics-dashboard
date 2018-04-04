import { TestBed, inject } from '@angular/core/testing';

import { LocalSystemHealthService } from './local-system-health.service';

describe('LocalSystemHealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalSystemHealthService]
    });
  });

  it('should be created', inject([LocalSystemHealthService], (service: LocalSystemHealthService) => {
    expect(service).toBeTruthy();
  }));
});

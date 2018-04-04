import { TestBed, inject } from '@angular/core/testing';

import { Type1DataService } from './type-1-data.service';

describe('Type1DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Type1DataService]
    });
  });

  it('should be created', inject([Type1DataService], (service: Type1DataService) => {
    expect(service).toBeTruthy();
  }));
});

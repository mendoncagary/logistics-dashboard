import { TestBed, inject } from '@angular/core/testing';

import { ListDevicesService } from './list-devices.service';

describe('ListDevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDevicesService]
    });
  });

  it('should be created', inject([ListDevicesService], (service: ListDevicesService) => {
    expect(service).toBeTruthy();
  }));
});

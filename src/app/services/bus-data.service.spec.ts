import { TestBed, inject } from '@angular/core/testing';

import { BusDataService } from './bus-data.service';

describe('BusDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusDataService]
    });
  });

  it('should ...', inject([BusDataService], (service: BusDataService) => {
    expect(service).toBeTruthy();
  }));
});

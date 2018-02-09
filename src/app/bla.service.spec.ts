import { TestBed, inject } from '@angular/core/testing';

import { BlaService } from './bla.service';

describe('BlaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlaService]
    });
  });

  it('should be created', inject([BlaService], (service: BlaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AlgorithmsService } from './algorithms.service';

describe('AlgorithmsService', () => {
  let service: AlgorithmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgorithmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PutDataService } from './put-data.service';

describe('PutDataService', () => {
  let service: PutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

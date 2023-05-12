import { TestBed } from '@angular/core/testing';

import { DashboardsrvcService } from './dashboardsrvc.service';

describe('DashboardsrvcService', () => {
  let service: DashboardsrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardsrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

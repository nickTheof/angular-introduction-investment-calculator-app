import { TestBed } from '@angular/core/testing';

import { CalculateInvestmentsService } from './calculate-investments.service';

describe('CalculateInvestmentsService', () => {
  let service: CalculateInvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateInvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

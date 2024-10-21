import { TestBed } from '@angular/core/testing';

import { WorkPermitService } from './work-permit.service';

describe('WorkPermitService', () => {
  let service: WorkPermitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkPermitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

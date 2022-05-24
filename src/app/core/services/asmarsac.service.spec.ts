import { TestBed } from '@angular/core/testing';

import { AsmarsacService } from './asmarsac.service';

describe('AsmarsacService', () => {
  let service: AsmarsacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsmarsacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

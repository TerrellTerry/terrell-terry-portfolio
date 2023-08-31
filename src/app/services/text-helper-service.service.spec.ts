import { TestBed } from '@angular/core/testing';

import { TextHelperServiceService } from './text-helper-service.service';

describe('TextHelperServiceService', () => {
  let service: TextHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

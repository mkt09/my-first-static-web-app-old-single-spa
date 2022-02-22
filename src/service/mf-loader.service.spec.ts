import { TestBed } from '@angular/core/testing';

import { MfLoaderService } from './mf-loader.service';

describe('MfLoaderService', () => {
  let service: MfLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

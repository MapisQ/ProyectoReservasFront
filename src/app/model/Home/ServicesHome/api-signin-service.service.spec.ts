import { TestBed } from '@angular/core/testing';

import { ApiSigninServiceService } from './api-signin-service.service';

describe('ApiSigninServiceService', () => {
  let service: ApiSigninServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSigninServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

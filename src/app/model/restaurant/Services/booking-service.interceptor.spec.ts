import { TestBed } from '@angular/core/testing';

import { BookingServiceInterceptor } from './booking-service.interceptor';

describe('BookingServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BookingServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BookingServiceInterceptor = TestBed.inject(BookingServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

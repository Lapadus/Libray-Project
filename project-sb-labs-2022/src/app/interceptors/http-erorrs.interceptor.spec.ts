import { TestBed } from '@angular/core/testing';

import { HttpErorrsInterceptor } from './http-erorrs.interceptor';

describe('HttpErorrsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErorrsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErorrsInterceptor = TestBed.inject(HttpErorrsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

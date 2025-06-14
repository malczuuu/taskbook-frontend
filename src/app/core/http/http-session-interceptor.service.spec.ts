import { TestBed } from '@angular/core/testing';
import { HttpSessionInterceptor } from './http-session-interceptor.service';

describe('HttpSessionInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSessionInterceptor = TestBed.inject(HttpSessionInterceptor);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AppLoggingService } from './app-logging-service';

describe('AppLoggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLoggingService]
    });
  });

  it('should be created', inject([AppLoggingService], (service: AppLoggingService) => {
    expect(service).toBeTruthy();
  }));
});

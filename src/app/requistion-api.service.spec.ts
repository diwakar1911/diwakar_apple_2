import { TestBed, inject } from '@angular/core/testing';

import { RequistionApiService } from './requistion-api.service';

describe('RequistionApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequistionApiService]
    });
  });

  it('should be created', inject([RequistionApiService], (service: RequistionApiService) => {
    expect(service).toBeTruthy();
  }));
});

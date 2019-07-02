import { TestBed, inject } from '@angular/core/testing';

import { EventrouteactivatorService } from './eventrouteactivator.service';

describe('EventrouteactivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventrouteactivatorService]
    });
  });

  it('should be created', inject([EventrouteactivatorService], (service: EventrouteactivatorService) => {
    expect(service).toBeTruthy();
  }));
});

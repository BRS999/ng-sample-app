import { TestBed, inject } from '@angular/core/testing';

import { VoterService } from './voter.serivce';

describe('VoterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoterService]
    });
  });

  it('should be created', inject([VoterService], (service: VoterService) => {
    expect(service).toBeTruthy();
  }));
});

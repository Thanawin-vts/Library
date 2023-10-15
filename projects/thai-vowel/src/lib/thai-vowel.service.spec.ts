import { TestBed } from '@angular/core/testing';

import { ThaiVowelService } from './thai-vowel.service';

describe('ThaiVowelService', () => {
  let service: ThaiVowelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaiVowelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GameofthroneService } from './gameofthrone.service';

describe('GameofthroneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameofthroneService = TestBed.get(GameofthroneService);
    expect(service).toBeTruthy();
  });
});

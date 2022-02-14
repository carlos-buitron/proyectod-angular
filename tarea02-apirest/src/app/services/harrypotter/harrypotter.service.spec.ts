import { TestBed } from '@angular/core/testing';

import { HarrypotterService } from './harrypotter.service';

describe('HarrypotterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarrypotterService = TestBed.get(HarrypotterService);
    expect(service).toBeTruthy();
  });
});

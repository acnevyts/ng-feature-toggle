import { TestBed } from '@angular/core/testing';

import { FeatureToggleUtilService } from './feature-toggle-util.service';

describe('FeatureToggleUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureToggleUtilService = TestBed.get(FeatureToggleUtilService);
    expect(service).toBeTruthy();
  });
});

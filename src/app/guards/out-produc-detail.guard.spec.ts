import { TestBed } from '@angular/core/testing';

import { OutProducDetailGuard } from './out-produc-detail.guard';

describe('OutProducDetailGuard', () => {
  let guard: OutProducDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutProducDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

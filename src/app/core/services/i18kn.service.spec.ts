import { TestBed } from '@angular/core/testing';

import { I18knService } from './i18kn.service';

describe('I18nService', () => {
  let service: I18knService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18knService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

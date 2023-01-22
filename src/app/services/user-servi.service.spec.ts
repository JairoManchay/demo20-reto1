import { TestBed } from '@angular/core/testing';

import { UserServiService } from './user-servi.service';

describe('UserServiService', () => {
  let service: UserServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

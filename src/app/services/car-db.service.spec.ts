import { TestBed } from '@angular/core/testing';

import { CarDbService } from './car-db.service';

describe('CarDbService', () => {
  let service: CarDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShelfCollectionService } from './shelf-collection.service';

describe('ShelfCollectionService', () => {
  let service: ShelfCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

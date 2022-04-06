import { TestBed } from '@angular/core/testing';

import { BooksCollectionService } from './books-collection.service';

describe('BooksCollectionService', () => {
  let service: BooksCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

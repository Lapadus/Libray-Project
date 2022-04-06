import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsBooksComponent } from './adults-books.component';

describe('AdultsBooksComponent', () => {
  let component: AdultsBooksComponent;
  let fixture: ComponentFixture<AdultsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultsBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuthorsComponent } from './card-authors.component';

describe('CardAuthorsComponent', () => {
  let component: CardAuthorsComponent;
  let fixture: ComponentFixture<CardAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

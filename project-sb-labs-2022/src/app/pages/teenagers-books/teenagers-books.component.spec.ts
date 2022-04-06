import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenagersBooksComponent } from './teenagers-books.component';

describe('TeenagersBooksComponent', () => {
  let component: TeenagersBooksComponent;
  let fixture: ComponentFixture<TeenagersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeenagersBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenagersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

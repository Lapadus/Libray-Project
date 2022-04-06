import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsBooksComponent } from './kids-books.component';

describe('KidsBooksComponent', () => {
  let component: KidsBooksComponent;
  let fixture: ComponentFixture<KidsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfShowComponent } from './shelf-show.component';

describe('ShelfShowComponent', () => {
  let component: ShelfShowComponent;
  let fixture: ComponentFixture<ShelfShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

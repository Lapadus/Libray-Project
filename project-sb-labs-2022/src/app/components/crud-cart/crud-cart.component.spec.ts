import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCartComponent } from './crud-cart.component';

describe('CrudCartComponent', () => {
  let component: CrudCartComponent;
  let fixture: ComponentFixture<CrudCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

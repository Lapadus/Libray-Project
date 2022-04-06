import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudShelfComponent } from './crud-shelf.component';

describe('CrudShelfComponent', () => {
  let component: CrudShelfComponent;
  let fixture: ComponentFixture<CrudShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

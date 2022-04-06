import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenagersPageComponent } from './teenagers-page.component';

describe('TeenagersPageComponent', () => {
  let component: TeenagersPageComponent;
  let fixture: ComponentFixture<TeenagersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeenagersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenagersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

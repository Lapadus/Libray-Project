import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsPageComponent } from './adults-page.component';

describe('AdultsPageComponent', () => {
  let component: AdultsPageComponent;
  let fixture: ComponentFixture<AdultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

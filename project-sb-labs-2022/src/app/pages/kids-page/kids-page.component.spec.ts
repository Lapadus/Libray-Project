import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsPageComponent } from './kids-page.component';

describe('KidsPageComponent', () => {
  let component: KidsPageComponent;
  let fixture: ComponentFixture<KidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

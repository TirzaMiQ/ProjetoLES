import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeteComponent } from './tapete.component';

describe('TapeteComponent', () => {
  let component: TapeteComponent;
  let fixture: ComponentFixture<TapeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeteListarComponent } from './tapete-listar.component';

describe('TapeteListarComponent', () => {
  let component: TapeteListarComponent;
  let fixture: ComponentFixture<TapeteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeteListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

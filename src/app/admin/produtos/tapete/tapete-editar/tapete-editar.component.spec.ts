import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeteEditarComponent } from './tapete-editar.component';

describe('TapeteEditarComponent', () => {
  let component: TapeteEditarComponent;
  let fixture: ComponentFixture<TapeteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

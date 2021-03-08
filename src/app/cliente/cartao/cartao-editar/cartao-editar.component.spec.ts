import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoEditarComponent } from './cartao-editar.component';

describe('CartaoEditarComponent', () => {
  let component: CartaoEditarComponent;
  let fixture: ComponentFixture<CartaoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

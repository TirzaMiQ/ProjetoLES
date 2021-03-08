import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeteCadastrarComponent } from './tapete-cadastrar.component';

describe('TapeteCadastrarComponent', () => {
  let component: TapeteCadastrarComponent;
  let fixture: ComponentFixture<TapeteCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeteCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeteCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

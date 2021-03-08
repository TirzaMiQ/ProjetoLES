import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeCadastrarComponent } from './rede-cadastrar.component';

describe('RedeComponent', () => {
  let component: RedeCadastrarComponent;
  let fixture: ComponentFixture<RedeCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

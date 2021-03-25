import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCartaoComponent } from './form-cartao.component';

describe('FormCartaoComponent', () => {
  let component: FormCartaoComponent;
  let fixture: ComponentFixture<FormCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

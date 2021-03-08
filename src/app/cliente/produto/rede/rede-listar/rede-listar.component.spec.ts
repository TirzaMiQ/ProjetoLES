import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeListarComponent } from './rede-listar.component';

describe('RedeListarComponent', () => {
  let component: RedeListarComponent;
  let fixture: ComponentFixture<RedeListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

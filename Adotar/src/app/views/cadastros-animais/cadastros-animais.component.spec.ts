import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosAnimaisComponent } from './cadastros-animais.component';

describe('CadastrosAnimaisComponent', () => {
  let component: CadastrosAnimaisComponent;
  let fixture: ComponentFixture<CadastrosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrosAnimaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

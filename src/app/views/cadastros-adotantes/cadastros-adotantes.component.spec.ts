import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosAdotantesComponent } from './cadastros-adotantes.component';

describe('CadastrosAdotantesComponent', () => {
  let component: CadastrosAdotantesComponent;
  let fixture: ComponentFixture<CadastrosAdotantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrosAdotantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrosAdotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

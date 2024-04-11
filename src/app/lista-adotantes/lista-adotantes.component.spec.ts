import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdotantesComponent } from './lista-adotantes.component';

describe('ListaAdotantesComponent', () => {
  let component: ListaAdotantesComponent;
  let fixture: ComponentFixture<ListaAdotantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdotantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

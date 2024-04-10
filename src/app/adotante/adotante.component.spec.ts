import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotanteComponent } from './adotante.component';

describe('AdotanteComponent', () => {
  let component: AdotanteComponent;
  let fixture: ComponentFixture<AdotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

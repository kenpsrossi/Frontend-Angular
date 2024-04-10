import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotanteFormComponent } from './adotante-form.component';

describe('AdotanteFormComponent', () => {
  let component: AdotanteFormComponent;
  let fixture: ComponentFixture<AdotanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdotanteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

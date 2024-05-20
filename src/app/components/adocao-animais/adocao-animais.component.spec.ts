import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocaoAnimaisComponent } from './adocao-animais.component';

describe('AdocaoAnimaisComponent', () => {
  let component: AdocaoAnimaisComponent;
  let fixture: ComponentFixture<AdocaoAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdocaoAnimaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdocaoAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

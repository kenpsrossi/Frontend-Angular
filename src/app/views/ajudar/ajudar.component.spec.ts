import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudarComponent } from './ajudar.component';

describe('AjudarComponent', () => {
  let component: AjudarComponent;
  let fixture: ComponentFixture<AjudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

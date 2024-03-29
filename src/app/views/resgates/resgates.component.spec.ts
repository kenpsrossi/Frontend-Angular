import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgatesComponent } from './resgates.component';

describe('ResgatesComponent', () => {
  let component: ResgatesComponent;
  let fixture: ComponentFixture<ResgatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

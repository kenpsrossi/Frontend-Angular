import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotarComponent } from './adotar.component';

describe('AdotarComponent', () => {
  let component: AdotarComponent;
  let fixture: ComponentFixture<AdotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdotarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

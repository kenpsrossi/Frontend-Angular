import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoCompletoComponent } from './notificacao-completo.component';

describe('NotificacaoCompletoComponent', () => {
  let component: NotificacaoCompletoComponent;
  let fixture: ComponentFixture<NotificacaoCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoCompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

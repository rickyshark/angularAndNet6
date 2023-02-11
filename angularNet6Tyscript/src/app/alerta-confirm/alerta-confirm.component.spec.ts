import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaConfirmComponent } from './alerta-confirm.component';

describe('AlertaConfirmComponent', () => {
  let component: AlertaConfirmComponent;
  let fixture: ComponentFixture<AlertaConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

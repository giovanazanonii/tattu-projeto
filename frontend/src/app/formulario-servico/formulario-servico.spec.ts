import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServicoComponent } from './formulario-servico';

describe('FormularioServico', () => {
  let component: FormularioServicoComponent;
  let fixture: ComponentFixture<FormularioServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioServicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

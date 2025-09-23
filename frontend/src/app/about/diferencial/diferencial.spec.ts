import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diferencial } from './diferencial';

describe('Diferencial', () => {
  let component: Diferencial;
  let fixture: ComponentFixture<Diferencial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diferencial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diferencial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

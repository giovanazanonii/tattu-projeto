import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapatilhasComponent } from './sapatilhas';

describe('Sapatilhas', () => {
  let component: SapatilhasComponent;
  let fixture: ComponentFixture<SapatilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SapatilhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapatilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

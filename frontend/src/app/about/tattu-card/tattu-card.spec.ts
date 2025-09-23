import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattuCard } from './tattu-card';

describe('TattuCard', () => {
  let component: TattuCard;
  let fixture: ComponentFixture<TattuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

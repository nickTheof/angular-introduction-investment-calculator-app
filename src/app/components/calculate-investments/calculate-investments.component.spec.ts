import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateInvestmentsComponent } from './calculate-investments.component';

describe('CalculateInvestmentsComponent', () => {
  let component: CalculateInvestmentsComponent;
  let fixture: ComponentFixture<CalculateInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateInvestmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

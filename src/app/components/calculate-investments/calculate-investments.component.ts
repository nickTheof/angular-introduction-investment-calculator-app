import { Component, input } from '@angular/core';
import { InvestmentYearInfo } from '../../shared/interfaces/investment-year-info';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-calculate-investments',
  imports: [CurrencyPipe],
  templateUrl: './calculate-investments.component.html',
  styleUrl: './calculate-investments.component.css',
})
export class CalculateInvestmentsComponent {
  dataTable = input<InvestmentYearInfo[]>();
}

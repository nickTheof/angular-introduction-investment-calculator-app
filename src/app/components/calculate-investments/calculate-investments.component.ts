import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CalculateInvestmentsService } from '../../services/calculate-investments.service';

@Component({
  selector: 'app-calculate-investments',
  imports: [CurrencyPipe],
  templateUrl: './calculate-investments.component.html',
  styleUrl: './calculate-investments.component.css',
})
export class CalculateInvestmentsComponent {
  private investmentService = inject(CalculateInvestmentsService);

  get results() {
    return this.investmentService.getDataTable();
  }
}

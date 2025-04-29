import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { CalculateInvestmentsComponent } from './components/calculate-investments/calculate-investments.component';
import { InvestmentYearInfo } from './shared/interfaces/investment-year-info';
import { CalculateInvestmentsService } from './services/calculate-investments.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, CalculateInvestmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private investmentService = inject(CalculateInvestmentsService);
  showCalcTable = signal<boolean>(false);
  data = signal<InvestmentYearInfo[]>(this.investmentService.getDataTable());

  showCalculatingInvestments(isCalculatingInvestments: boolean) {
    this.data.set(this.investmentService.getDataTable());
    this.showCalcTable.set(isCalculatingInvestments);
  }
}

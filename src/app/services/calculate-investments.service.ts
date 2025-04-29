import { Injectable } from '@angular/core';
import { UserInput } from '../shared/interfaces/user-input';
import { InvestmentYearInfo } from '../shared/interfaces/investment-year-info';

@Injectable({
  providedIn: 'root',
})
export class CalculateInvestmentsService {
  constructor() {}

  private dataTable: InvestmentYearInfo[] = [];

  createDataTable(userInput: UserInput) {
    const data: InvestmentYearInfo[] = [];
    let investmentValue = userInput.initialInvestment;
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        userInput.annualInvestment * year -
        userInput.initialInvestment;

      data.push({
        year: `${year}`,
        investmentValue: `${investmentValue}`,
        interest: `${interestEarnedInYear}`,
        totalInterest: `${totalInterest}`,
        investedCapital: `${
          userInput.initialInvestment + userInput.annualInvestment * year
        }`,
      });
    }
    this.dataTable = data;
  }

  getDataTable() {
    return this.dataTable;
  }
}

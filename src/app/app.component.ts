import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { CalculateInvestmentsComponent } from './components/calculate-investments/calculate-investments.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, CalculateInvestmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showCalcTable = signal<boolean>(false);

  showCalculatingInvestments(isCalculatingInvestments: boolean) {
    this.showCalcTable.set(isCalculatingInvestments);
  }
}

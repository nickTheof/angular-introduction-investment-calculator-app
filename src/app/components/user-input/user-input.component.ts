import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateInvestmentsService } from '../../services/calculate-investments.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal<number>(100);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(5);
  duration = signal<number>(10);
  isCalculatingInvestment = output<boolean>();
  investmentService = inject(CalculateInvestmentsService);

  onSubmit() {
    this.investmentService.createDataTable({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
    this.resetForm();
    this.isCalculatingInvestment.emit(true);
  }

  private resetForm() {
    this.initialInvestment.set(100);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}

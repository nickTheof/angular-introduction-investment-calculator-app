import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-calculator-angular';
}

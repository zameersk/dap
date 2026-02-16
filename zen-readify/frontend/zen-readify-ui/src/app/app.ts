import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SpinnerService } from './shared/components/spinner/spinner.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, CommonModule, SpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zen-readify-ui');
  spinnerService = inject(SpinnerService)
}

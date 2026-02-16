// shared/book-card.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  styleUrl:'./book-card.component.scss',
  templateUrl:'./book-card.component.html'
})
export class BookCardComponent {
  @Input() book!: any;
}

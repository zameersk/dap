// shared/book-card.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="col-md-3 mb-4">
      <div class="card h-100 shadow-sm"
           [routerLink]="['/books', book._id]">
        <img [src]="book.imageUrl" class="card-img-top">
        <div class="card-body">
          <h6 class="fw-bold">{{ book.title }}</h6>
          <p class="text-muted small">{{ book.author }}</p>
        </div>
      </div>
    </div>
  `
})
export class BookCardComponent {
  @Input() book!: any;
}

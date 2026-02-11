// shared/book-card.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  styles: `
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: scale(1.05);
    }
      .card{
       cursor: pointer;
      }
      h6 {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
        p {
          font-size: 0.7rem;
          margin-bottom: 0;
        }
  `,
  template: `
    <div class="mb-4">
      <div class="card h-80 shadow-sm max-h-80"
           [routerLink]="['/books', book._id]">
        <img loading="lazy" [src]="book.imageUrl" class="card-img-top" alt="{{ book.title }}" width="100%" height="150" style="object-fit: cover;">
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

// features/book-details/book-details.component.ts
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/services/book.service';
import { NgIf } from '@angular/common';
import { ReviewComponent } from '../../shared/components/reviews/review.component';

@Component({
  standalone: true,
  templateUrl: './book-details.component.html',
  imports:[NgIf, ReviewComponent]
})
export class BookDetailsComponent {

  book = signal<any>(null);

  constructor(route: ActivatedRoute, bookService: BookService) {
    const id = route.snapshot.params['id'];
    bookService.getBookById(id)
      .subscribe(data => this.book.set(data));
  }
}

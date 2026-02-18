// features/book-details/book-details.component.ts
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/services/book.service';
import { NgIf } from '@angular/common';
import { ReviewComponent } from '../../shared/components/reviews/review.component';

@Component({
  standalone: true,
  templateUrl: './book-details.component.html',
  imports:[NgIf, ReviewComponent]
})
export class BookDetailsComponent implements OnInit {

  book = signal<any>(null);

  route = inject(ActivatedRoute);
  bookService = inject(BookService);
  reviews:any = signal([]);

 async ngOnInit() {
        const id = this.route.snapshot.params['id'];
        const data = await this.bookService.getBookById(id)
        console.log(data)
        this.book.set(data);
        const reviews = await this.bookService.getBookReviews(id);
        console.log(reviews)
        this.reviews.set(reviews);
        
  }
}

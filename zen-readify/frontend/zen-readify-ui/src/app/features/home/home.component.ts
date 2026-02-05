import { Component, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, effect, signal } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { BookCardComponent } from '../../shared/book-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [BookCardComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  searchText = signal('');
  genre = signal('');
  books = signal<any[]>([]);

  constructor(private bookService: BookService) {
    effect(() => {
      this.bookService
        .searchBooks(this.searchText(), this.genre())
        .subscribe(data => this.books.set(data));
    });
  }
}

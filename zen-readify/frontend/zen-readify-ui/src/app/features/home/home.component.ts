import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit, effect, signal } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { BookCardComponent } from '../../shared/book-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [BookCardComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  searchText = signal('');
  genre = signal('');
  books = signal<any[]>([]);
  isLoading = signal(false);
  categories= signal<any>([]);

  async ngOnInit() {
    this.isLoading.set(true);
    const categoriesObj = await this.bookService.getAllCategories() as any;
    const booksObs = await this.bookService.getAllBooks();
    this.books.set(booksObs);
    this.categories.set(categoriesObj?.categories ?? []);
    this.isLoading.set(false);
    console.log('Fetched categories:', this.categories());
  }

  constructor(private bookService: BookService) {
  }
}

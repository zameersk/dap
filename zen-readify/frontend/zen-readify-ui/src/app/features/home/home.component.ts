import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit, effect, signal, AfterViewInit, ViewChild, inject } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { groupBooksByCategory } from '../../shared/utils/groupByCategory';
import { FallbackComponent } from '../../shared/components/fallback.component';
import { SpinnerService } from '../../shared/components/spinner/spinner.service';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [BookCardComponent, FormsModule, CommonModule, FallbackComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

  searchText = signal('');
  genres: any = signal([]);
  books = signal<any[]>([]);
  isLoading = signal(false);
  categories = signal<any>([]);
  selectedGenre = 'All';
  showCategory = signal(false);

  readonly bookService = inject(BookService);
  readonly spinnerService = inject(SpinnerService);
  
  @ViewChild('search') search: any;

  async ngOnInit() {

    const categoriesObj = await this.bookService.getAllCategories() as any;
    const booksObs = await this.bookService.getAllBooks();
    const allGenre = this.bookService.getAllGenere();


    this.books.set(groupBooksByCategory(booksObs));
    this.categories.set(categoriesObj?.categories ?? []);
    this.genres.set(['All', ...allGenre()])

    console.log('Fetched categories:', this.books());
  }

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'input').pipe(debounceTime(1000), distinctUntilChanged()).subscribe((event: any) => {
      this.searchText.set(event.target.value)
      this.searchBooks();
    })
  }

  async searchBooks() {
    const result = await this.bookService.searchBooks(this.searchText(), this.selectedGenre === 'All' ? '' : this.selectedGenre);
    this.books.set(groupBooksByCategory(result))
  }


  filterByGenre() {
    this.searchBooks();
  }


} 

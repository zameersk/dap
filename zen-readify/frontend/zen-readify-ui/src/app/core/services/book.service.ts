// core/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {

  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  searchBooks(query: string, genre: string) {
    return of([
      { title: 'Mock Book 1', author: 'Author 1', imageUrl: 'https://via.placeholder.com/150' },
      { title: 'Mock Book 2', author: 'Author 2', imageUrl: 'https://via.placeholder.com/150' },
      { title: 'Mock Book 3', author: 'Author 3', imageUrl: 'https://via.placeholder.com/150' }
    ]);
    // return this.http.get<any[]>(
    //   `${this.API}/search?q=${query}&genre=${genre}`
    // );
  }

  getBookById(id: string) {
    return of({  title: 'Mock Book Title', author: 'Mock Author', imageUrl: 'https://via.placeholder.com/150' });
   // return this.http.get(`${this.API}/books/${id}`);
  }
}

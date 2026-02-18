// core/services/book.service.ts
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, of } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class BookService {

  httpService = inject(HttpService)

  distinctGeneres:any = signal([]);

  searchBooks(query: string, genre: string) {
    return firstValueFrom(this.httpService.searchBooks(query,genre));
  }

  getBookById(id: string) {
   return firstValueFrom(this.httpService.getBookById(id));
  }

  getAllBooks() {
    return firstValueFrom(this.httpService.getAllBooks().pipe(map((res)=>{
       const allGenered = new Set(res.map(book => book.genre));
       this.distinctGeneres.set([...allGenered]);
       return res;
    })))
  }

  getAllCategories() {
    return firstValueFrom(this.httpService.getAllCategories());
  }

  getAllGenere(){
    return this.distinctGeneres;
  }

  getBookReviews(bookId: string){
    return firstValueFrom(this.httpService.getBookReviews(bookId))
  }

}

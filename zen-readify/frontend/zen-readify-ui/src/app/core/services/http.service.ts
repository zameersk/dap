import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SpinnerService } from "../../shared/components/spinner/spinner.service";
import { catchError, map, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private API = 'http://localhost:3000/api';
    http = inject(HttpClient);
    spinnerService = inject(SpinnerService);

    searchBooks(query: string, genre: string) {
        if (!this.spinnerService.getStatus()) this.spinnerService.startSpinner();
        return this.http.get<any[]>(
            `${this.API}/search?q=${query}&genre=${genre}`
        ).pipe(map((res) => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return res;
        }));
    }

    getBookById(id: string) {
        if (!this.spinnerService.getStatus()) this.spinnerService.startSpinner();
        return this.http.get(`${this.API}/books/${id}`).pipe(catchError(this.errorHandler('get single book')), map((res) => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return res;
        }));
    }

    getAllBooks() {
        if (!this.spinnerService.getStatus()) this.spinnerService.startSpinner();
        return this.http.get<any[]>(this.API + '/books').pipe(catchError(this.errorHandler('get all books')), map((res) => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return res;
        }));
    }

    getAllCategories() {
        if (!this.spinnerService.getStatus()) this.spinnerService.startSpinner();
        return this.http.get<string[]>(`${this.API}/categories`).pipe(map((res) => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return res;
        }));;
    }

    getBookReviews(bookId: string) {
        if (!this.spinnerService.getStatus()) this.spinnerService.startSpinner();
        return this.http.get<string[]>(`${this.API}/reviews/${bookId}`).pipe(map((res) => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return res;
        }));;
    }



    errorHandler(operation = 'operation') {
        return (err: HttpErrorResponse) => throwError(() => {
            if (this.spinnerService.getStatus()) this.spinnerService.stopSpinner();
            return new Error(`${operation} failed! Error:${err.message}`)
        })
    }
}
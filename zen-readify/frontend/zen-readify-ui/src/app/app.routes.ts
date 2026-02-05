import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BookDetailsComponent } from './features/book-details/book-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books/:id', component: BookDetailsComponent }
];

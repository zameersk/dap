// shared/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-dark bg-dark px-3">
      <a class="navbar-brand" routerLink="/">Readify</a>
    </nav>
  `
})
export class NavbarComponent {}

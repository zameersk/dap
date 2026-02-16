import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'app-fallback',
    standalone: true,
    template: `
    <div class="row">
      <ng-container>
        <div class="col-12 text-center">
              <div class="alert alert-danger text-center" role="alert">
                   {{ message() }}
              </div>
        </div>
      </ng-container>
    </div>
`
})
export class FallbackComponent {
    message = input('')
}
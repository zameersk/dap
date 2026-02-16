import { Component } from "@angular/core";

@Component({
    selector: 'app-spinner',
    template: `
    <div class="spinner-overlay d-flex justify-content-center align-items-center" >
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `,
    styles:`
    .spinner-overlay{
        position: fixed;
        z-index: 1050;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        }
    `,
    standalone: true
})
export class SpinnerComponent {

}
import { Component, input } from "@angular/core";

@Component({
    selector:'app-review',
    standalone:true,
    template:`
    <div class="media">

            <div class="media-body">
                <h5 class="mt-0">Test</h5>
                <p>{{ data()?.comment }}</p>
                <p>Rating : {{data()?.rating}}</p>
            </div>
    </div>
    `
})
export class ReviewComponent{

    data: any = input({comment:'T', rating:'T'});

}
import { Component, input } from "@angular/core";

@Component({
    selector:'app-review',
    standalone:true,
    template:`
    <div class="media">
        <img src="..." class="align-self-start mr-3" alt="...">
            <div class="media-body">
                <h5 class="mt-0">{{ data?.user }} </h5>
                <p>{{ data?.review }}</p>
            </div>
    </div>
    `
})
export class ReviewComponent{

    data: any = input({user:'', review:''});

}
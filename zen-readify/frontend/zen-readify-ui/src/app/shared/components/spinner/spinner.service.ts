import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class SpinnerService {

     private isLoading = signal(true);

    startSpinner(){
      this.isLoading.set(true);
    }

    stopSpinner(){
      this.isLoading.set(false)
    }

    get getStatus(){
        return this.isLoading;
    }

}
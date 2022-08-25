import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoadingServiceService {

    public isLoading = new Subject<boolean>()

    /**
     * The show() function sets the value of the _isLoading BehaviorSubject to true
     */
    public show(): void {
        this.isLoading.next(true)
    }

    /**
     * The hide() function sets the value of the _isLoading BehaviorSubject to false
     */
    public hide(): void {
        this.isLoading.next(false)
    }
}

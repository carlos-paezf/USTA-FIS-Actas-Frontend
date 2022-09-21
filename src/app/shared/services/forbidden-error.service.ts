import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ForbiddenErrorService {
    @Output() forbiddenErrorEmitter = new EventEmitter<boolean>();

    /**
     * The function emits an event that is listened to by the parent component
     */
    reportInternalServerError() {
        this.forbiddenErrorEmitter.emit(true)
    }
}

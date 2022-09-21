import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class UnauthorizedErrorService {

    @Output() unauthorizedErrorEmitter = new EventEmitter<boolean>();

    /**
     * The function emits an event that is listened to by the parent component
     */
    reportInternalServerError() {
        this.unauthorizedErrorEmitter.emit(true)
    }
}

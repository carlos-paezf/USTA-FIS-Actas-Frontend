import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

import { InternalServerErrorService, ForbiddenErrorService, UnauthorizedErrorService } from 'src/app/shared/services';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit {

    public internalServerError: boolean
    public forbiddenError: boolean
    public unauthorizedError: boolean

    constructor(
        private readonly _internalError: InternalServerErrorService,
        private readonly _forbiddenError: ForbiddenErrorService,
        private readonly _unauthorizedError: UnauthorizedErrorService
    ) {
        this.internalServerError = false
        this.forbiddenError = false
        this.unauthorizedError = false
    }

    /**
     * The function subscribes to the error emitter in the error service and sets the error to the
     * error variable in the component. 
     * Example:
     * The function subscribes to the internalServerErrorEmitter, which is an observable, and when the
     * observable emits a value, the function sets the internalServerError property to the value
     * emitted by the observable
     */
    ngAfterViewInit(): void {
        this._internalError.internalServerErrorEmitter.subscribe(error => {
            this.internalServerError = error
        })

        this._forbiddenError.forbiddenErrorEmitter.subscribe(error => {
            this.forbiddenError = error
        })

        this._unauthorizedError.unauthorizedErrorEmitter.subscribe(error => {
            this.unauthorizedError = error
        })
    }
}
